Exit code: 0
Wall time: 5.2 seconds
Output:
const services=[['в™§','General Dentistry','Keep your smile healthy with routine checkups, cleanings and prevention.'],['в™ў','Cosmetic Dentistry','Enhance your smile with whitening, veneers and bonding treatments.'],['в–±','Restorative Dentistry','From fillings to crowns and bridges, we restore your smile and function.'],['в™§','Orthodontics','Straighten your teeth and improve your bite with braces or aligners.'],['в™Ў','Dental Implants','Permanent, natural-looking solutions for missing teeth.'],['в™ў','Preventive Care','Prevent problems before they start with proactive care.']];
const benefits=[['в™§','Patient First Approach','We take time to listen and understand your needs.'],['в—·','Convenient Scheduling','Early morning, evening and weekend appointments available.'],['в™ў','Insurance Friendly','We work with most insurance plans and offer flexible payment options.'],['в†','5-Star Rated Care','Our patients love their experience and their new smiles!']];
document.querySelector('#service-grid').innerHTML=services.map(s=>`<article class="service-card"><div class="service-icon">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p><a href="#booking">Learn More в†’</a></article>`).join('');
document.querySelector('#footer-services').innerHTML=services.map(s=>`<a href="#services">${s[1]}</a>`).join('');
document.querySelector('#patients').innerHTML=benefits.map(b=>`<div class="benefit"><i>${b[0]}</i><div><b>${b[1]}</b><p>${b[2]}</p></div></div>`).join('');
document.querySelectorAll('a[href^="mailto:"]').forEach(a=>a.addEventListener('click',()=>{const t=document.querySelector('#toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500)}));

