import type { IncomingMessage, ServerResponse } from 'node:http';

type Request = IncomingMessage & { body?: unknown; method?: string };
type Lead = { name: string; email: string; phone: string; brokerage?: string; market?: string; crm?: string; contacts?: string; challenge?: string; website?: string; consent: boolean; source?: string };
const allowedCrms = ['Follow Up Boss','kvCORE','Lofty','Brivity','Sierra Interactive','HubSpot','Other / Spreadsheet'];
const clean = (value:unknown,max:number) => typeof value === 'string' ? value.trim().slice(0,max) : '';
function send(res:ServerResponse, code:number, body:{ok:boolean;error?:string}) {
 res.statusCode=code; res.setHeader('Content-Type','application/json; charset=utf-8'); res.setHeader('Cache-Control','no-store'); res.end(JSON.stringify(body));
}
async function bodyOf(req:Request):Promise<unknown> {
 if(req.body !== undefined) {
   if(typeof req.body==='string') return JSON.parse(req.body);
   return req.body;
 }
 const chunks:Buffer[]=[]; let bytes=0;
 for await(const chunk of req){const b=Buffer.isBuffer(chunk)?chunk:Buffer.from(chunk); bytes+=b.length; if(bytes>16000) throw new Error('Too large');chunks.push(b);}
 return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}
export default async function handler(req:Request,res:ServerResponse) {
 if(req.method!=='POST') return send(res,405,{ok:false,error:'Method not allowed.'});
 if(!String(req.headers['content-type']||'').startsWith('application/json'))return send(res,415,{ok:false,error:'JSON required.'});
 const destination=process.env.LEAD_WEBHOOK_URL;
 if(!destination) return send(res,503,{ok:false,error:'Request delivery is not configured. Please try again later.'});
 let raw:unknown;
 try{raw=await bodyOf(req);}catch{return send(res,400,{ok:false,error:'Invalid request.'});}
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return send(res,400,{ok:false,error:'Invalid fields.'});
 const input=raw as Record<string,unknown>;
 if(clean(input.website,200))return send(res,200,{ok:true}); // honeypot: no delivery
 if(input.consent!==true)return send(res,400,{ok:false,error:'Consent is required.'});
 const lead:Lead={
   name:clean(input.name,120),email:clean(input.email,254),phone:clean(input.phone,30),
   brokerage:clean(input.brokerage,120),market:clean(input.market,120),
   crm:clean(input.crm,80),contacts:clean(input.contacts,80),
   challenge:clean(input.challenge,1000),consent:true,source:'realtor-pipeline-recovery-v2'
 };
 if(lead.name.length<2||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)||lead.phone.replace(/\D/g,'').length<10||!allowedCrms.includes(lead.crm||''))return send(res,400,{ok:false,error:'Please check your name, email, phone number, and CRM.'});
 try{
   const url=new URL(destination);
   if(url.protocol!=='https:')throw new Error('Destination must be HTTPS.');
   const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),8000);
   let reply:Response;
   try{reply=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.LEAD_WEBHOOK_TOKEN?{'Authorization':`Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({lead,receivedAt:new Date().toISOString()}),signal:controller.signal});}
   finally{clearTimeout(timer);}
   if(!reply.ok)throw new Error('Upstream rejected request');
   return send(res,200,{ok:true});
 }catch{
   // Never log contact data or downstream webhook secrets.
   return send(res,502,{ok:false,error:'Your request could not be delivered. Please try again later.'});
 }
}
