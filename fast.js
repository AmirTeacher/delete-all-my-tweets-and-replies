(async()=>{
const me='/'+location.pathname.split('/')[1].toLowerCase(),w=t=>new Promise(r=>setTimeout(r,t)),$=(s,e=document)=>e.querySelector(s);
let idle=0;
while(idle<8){
 const a=[...document.querySelectorAll('article[data-testid="tweet"]')].find(a=>!a.dataset.x&&($('[data-testid="User-Name"] a',a)?.getAttribute('href').toLowerCase()===me||$('[data-testid="unretweet"]',a)));
 if(!a){scrollBy(0,1500);await w(700);idle++;continue}
 idle=0;a.dataset.x=1;a.scrollIntoView();
 const u=$('[data-testid="unretweet"]',a);
 if(u){u.click();await w(150);$('[data-testid="unretweetConfirm"]')?.click()}
 else{$('[data-testid="caret"]',a).click();await w(150);$('[role="menuitem"]').click();await w(150);$('[data-testid="confirmationSheetConfirm"]')?.click()}
 await w(300);
}
console.log('done');
})()
