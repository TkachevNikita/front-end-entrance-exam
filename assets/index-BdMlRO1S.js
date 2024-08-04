(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const u=async()=>await fetch("/front-end-entrance-exam/mockCv.json"),a=(e,t)=>{const o=document.createElement("div");return o.classList.add(e,"cv-block"),o.innerHTML=t,o},m=e=>e.map(t=>{switch(t){case"figma":return"/front-end-entrance-exam/tools/logoFigma.svg";case"photoshop":return"/front-end-entrance-exam/tools/logoPs.svg";case"illustrator":return"/front-end-entrance-exam/tools/logoLustra.svg";case"premier":return"/front-end-entrance-exam/tools/logoPremier.svg";case"notion":return"/front-end-entrance-exam/tools/logoNotion.svg";case"meet":return"/front-end-entrance-exam/tools/logoMeet.svg";case"zapier":return"/front-end-entrance-exam/tools/logoZapier.svg";case"webflow":return"/front-end-entrance-exam/tools/logoWebflow.svg";case"framer":return"/front-end-entrance-exam/tools/logoFramer.svg";case"wordpress":return"/front-end-entrance-exam/tools/logoWordpress.svg";case"chatgpt":return"/front-end-entrance-exam/tools/logoChatGPT.svg";case"copilot":return"/front-end-entrance-exam/tools/logoCopilot.svg";case"midjourney":return"/front-end-entrance-exam/tools/logoMidjourney.svg";default:return""}}),i=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},d=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null},p=()=>{const e={name:document.querySelector(".profile__name").textContent,post:document.querySelector(".profile__post").textContent,languages:Array.from(document.querySelectorAll(".languages__name--item")).map((t,o)=>({name:t.textContent,level:document.querySelectorAll(".languages__progress--item")[o].style.width.replace("%","")})),experience:Array.from(document.querySelectorAll(".experience__item")).map(t=>({period:t.querySelector(".experience__item--date").textContent,post:t.querySelector(".job__title").textContent,place:t.querySelector(".job__place").textContent,competitions:Array.from(t.querySelectorAll(".competitions__item")).map(o=>o.textContent)})),tools:d("cvData").tools,education:Array.from(document.querySelectorAll(".education__item")).map(t=>({period:t.querySelector(".education__date").textContent,title:t.querySelector(".education__title").textContent,tags:Array.from(t.querySelectorAll(".education__tags--item")).map(o=>o.textContent),place:t.querySelector(".education__place").textContent})),interests:Array.from(document.querySelectorAll(".interests__item")).map(t=>t.textContent),email:document.querySelector(".contact__email").textContent};i("cvData",e)},_=(e,t)=>{const o=`
        <span class="profile__hello">Hello 👋🏻 I’m</span>
        <h2 class="profile__name" contenteditable="true">${e}</h2>
        <p class="profile__post" contenteditable="true">${t}</p>
    `;return a("profile__id",o)},g=()=>{const e=document.createElement("img");return e.src="/front-end-entrance-exam/profileImg.png",e.alt="profile image",e.classList.add("profile__avatar"),e},f=e=>{const t=`
        <h2 class="cv-block__title">Languages</h2>
        <div class="profile__languages--container languages">
            <ul class="languages__name--list">
                ${e.map(o=>`<li class="languages__name--item" contenteditable="true">${o.name}</li>`).join("")}
            </ul>
            <ul class="languages__progress--list">
                ${e.map(o=>`
                    <li class="languages__progress--item" style="width: ${o.level}%">
                        <div class="progress-bar"></div>
                    </li>`).join("")}
            </ul>
        </div>
    `;return a("profile__languages",t)},v=e=>{const t=`
        <h2 class="cv-block__title">Experience</h2>
        <ul class="experience__list">
            ${e.map(o=>`
                <li class="experience__item">
                    <div class="experience__item--container">
                        <div class="experience__item--head">
                            <span class="experience__item--date" contenteditable="true">${o.period}</span>
                        </div>
                        <div class="experience__item--body">
                            <div class="job">
                                <h3 class="job__title" contenteditable="true">${o.post}</h3>
                                <span class="job__place" contenteditable="true">${o.place}</span>
                            </div>
                            <div class="competitions">
                                <ul class="competitions__list">
                                    ${o.competitions.map(s=>`<li class="competitions__item" contenteditable="true">${s}</li>`).join("")}
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>`).join("")}
        </ul>
    `;return a("experience",t)},h=e=>{const t=`
        <div class="tools">
            <h2 class="cv-block__title">
                Tools
            </h2>
            <ul class="tools__categories">
                ${e.map(o=>`
                        <li class="tools__category">
                            <h3 class="tools__category--title">
                              design
                            </h3>
                            <ul class="tools__category--list">
                                ${m(o.tags).map(s=>`<li class="tools__category--item">
                                        <img src="${s}" alt="${o}" class="tool-icon">
                                    </li>`).join("")}
                              
                            </ul>
                        </li>`).join("")}
            </ul>
        </div>`;return a("tools",t)},y=e=>{const t=`
        <h2 class="cv-block__title">Interests</h2>
        <ul class="interests__list">
            ${e.map(o=>`<li class="interests__item" contenteditable="true">${o}</li>`).join("")}
        </ul>
    `;return a("interests",t)},x=e=>{const t=`
        <h2 class="cv-block__title contact__text">Let´s chat! I´m ready to work on exciting projects</h2>
        <span class="contact__email" contenteditable="true">${e}</span>
    `;return a("contact",t)},b=(e,t)=>{const o=document.createElement("div");return o.classList.add("container-column"),o.appendChild(y(e)),o.appendChild(x(t)),o},S=e=>{const t=`
        <h2 class="cv-block__title">Education</h2>
        <ul class="education__list">
            ${e.map(o=>`
                <li class="education__item">
                    <span class="education__date" contenteditable="true">${o.period}</span>
                    <h3 class="education__title" contenteditable="true">${o.title}</h3>
                    <ul class="education__tags">
                        ${o.tags.map(s=>`<li class="education__tags--item" contenteditable="true">${s}</li>`).join("")}
                    </ul>
                    <span class="education__place" contenteditable="true">${o.place}</span>
                </li>`).join("")}
        </ul>
    `;return a("education",t)},$=document.querySelector("#root"),l=(e,t)=>{const o=document.createElement("section");o.classList.add(e,"row"),t.forEach(s=>o.appendChild(s)),$.appendChild(o)},C=async()=>{let e=d("cvData");if(!e)try{e=await(await u()).json(),i("cvData",e)}catch(t){console.error(t)}e&&(l("profile",[g(),_(e.name,e.post),f(e.languages)]),l("skills",[v(e.experience),h(e.tools)]),l("other",[S(e.education),b(e.interests,e.email)]))},L=e=>{e.classList.add("smooth-fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("smooth-fade-in")},{once:!0})};document.addEventListener("DOMContentLoaded",async()=>{await C(),document.querySelectorAll('[contenteditable="true"]').forEach(e=>{e.addEventListener("blur",()=>{L(e),p()})})});
