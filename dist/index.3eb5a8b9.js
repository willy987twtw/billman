function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},s=n.parcelRequired7e5;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},n.parcelRequired7e5=s),s.register("bXuNP",(function(t,n){var r,a;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},a=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("bXuNP").register(JSON.parse('{"2G0cO":"index.3eb5a8b9.js","41LG6":"revise.809c8e4f.png","5k0fD":"delete.014e6afe.png"}'));class o{constructor(e,t,n){this.id=this._getRomdomId(),this.groupName=e,this.users=t,this.events=n}_getRomdomId(){return"G_"+Math.random().toString(36).substr(2,9)}}class i{constructor(e,t,n,r){this.id=this._getRomdomId(),this.userName=e,this.assets=t,this.debts=n,this.group=r,this.balance=this.assets-this.debts}_getRomdomId(){return"U_"+Math.random().toString(36).substr(2,9)}}class d{constructor(e,t,n,r,a,s,o,i,d,c,u,l){this.id=this._getRomdomId(),this.spend=e,this.date=t,this.type=n,this.productName=r,this.note=a,this.payer=s,this.payerId=o,this.sharer=i,this.sharerId=d,this.group=c,this.groupId=u,this.isAllMember=l}_getRomdomId(){return"E_"+Math.random().toString(36).substr(2,9)}}const c={activeGroup:[],groupObject:[],sharerId:[],sharer:[],eventDateList:[]},u=async function(e){const t=new o(e,[],[]);l(t),h(t),c.groupObject.push(t),_(),y()},l=async function(e){if(!e){const t=c.groupObject.find((e=>e.id===c.activeGroup[0].id)),n=c.groupObject.indexOf(t);e=c.groupObject[n]}c.activeGroup.splice(0,1),c.activeGroup.push(e),y()},p=function(e){if(c.activeGroup[0].users.map((t=>t.userName===e)).includes(!0))return void alert("已有相同名稱，請重新命名");const t=new i(e,0,0,c.activeGroup[0].groupName),n=c.groupObject.findIndex((e=>e.id===c.activeGroup[0].id));c.groupObject[n].users.push(t),l(c.groupObject[n]),y()},_=function(){const e=c.groupObject.find((e=>e.id===c.activeGroup[0].id)),t=c.groupObject.indexOf(e);c.groupObject[t]&&(c.groupObject[t].users.map((e=>e.balance=e.assets-e.debts)),l(c.groupObject[t]))},v=function(){const e=document.querySelector(".event-form__input--spend"),t=document.querySelector(".event-form__input--date"),n=document.querySelector(".event-form__input--type"),r=document.querySelector(".event-form__input--name"),a=document.querySelector(".event-form__input--note"),s=document.querySelector(".event-form__input--payer"),o=c.activeGroup[0].users.find((e=>e.id===s.value));if(!Number.isFinite(+e.value)||Number(e.value)<0||Number(e.value)%1!=0)return alert("請輸入正整數"),c.sharerId=[],void(c.sharer=[]);const i=new d(e.value,t.value,n.value,r.value,a.value,o.userName,s.value,c.sharer,c.sharerId,c.activeGroup[0].groupName,c.activeGroup[0].id,c.sharerId.length===c.activeGroup[0].users.length),u=c.groupObject.findIndex((e=>e.id===c.activeGroup[0].id));c.groupObject[u].events.push(i),l(c.groupObject[u]),function(e){const t=c.groupObject.find((e=>e.id===c.activeGroup[0].id)),n=c.groupObject.indexOf(t),r=c.groupObject[n].users.find((t=>t.id===`${e.payerId}`));r.assets=Number(r.assets)+Number(e.spend);for(const t of e.sharer){const[r]=c.groupObject[n].users.filter((n=>n.id===`${e.sharerId[e.sharer.indexOf(t)]}`));if(!r)return;r.debts=Number(Number(r.debts)+Number((e.spend/c.sharer.length).toFixed(2))).toFixed(2)}_(),l(c.groupObject[n])}(i),y()},g=function(e){const t=c.groupObject.find((e=>e.id===c.activeGroup[0].id)),n=c.groupObject.indexOf(t),r=c.groupObject[n].events.find((t=>t.id===e)),a=c.groupObject[n].users.find((e=>e.id===r.payerId));a.assets=Number(a.assets)-Number(r.spend);for(const e of r.sharer){const[t]=c.groupObject[n].users.filter((t=>t.id===`${r.sharerId[r.sharer.indexOf(e)]}`));if(!t)return;t.debts=Number(Number(t.debts)-Number((r.spend/r.sharer.length).toFixed(2))).toFixed(2)}_()},f=function(){document.querySelectorAll("input[type=checkbox]:checked").forEach((e=>{c.sharerId.push(e.classList[1]),c.sharer.push(e.value),"selectedAll"===c.sharer.at(-1)&&(c.sharer.splice(-1,1),c.sharerId.splice(-1,1))}))},m=function(){c.activeGroup[0].events=c.activeGroup[0].events.map((e=>e)).sort(((e,t)=>new Date(e.date)-new Date(t.date)))},h=function(e){0===e.users.length&&(newUser=new i("自己",0,0,c.activeGroup[0].groupName),e.users.push(newUser),l(e))},b=()=>{const e=c.groupObject.find((e=>e.id===c.activeGroup[0].id)),t=c.groupObject.indexOf(e);c.groupObject[t].events.map((e=>{e.isAllMember=e.sharerId.length===c.groupObject[t].users.length})),l(c.groupObject[t]),y()},y=function(){S(),N()},S=function(){localStorage.setItem("groups",JSON.stringify(c.groupObject)),localStorage.setItem("activeGroup",JSON.stringify(c.activeGroup))},N=function(){const e=JSON.parse(localStorage.getItem("groups")),t=JSON.parse(localStorage.getItem("activeGroup"));t&&e&&(c.groupObject=e,c.activeGroup[0]=t[0])};(()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`),console.log(`執行成功，目前高度為${100*e}px`),console.log("hey")})(),N(),0===c.groupObject.length&&u("預設群組"),function(){const e=new Date,t=`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,0)}-${`${e.getDate()}`.padStart(2,0)}`;document.querySelector(".event-form__input--date").setAttribute("value",t)}(),_(),S();class w{render(e,t=!0){this._data=e;const n=this._generateMarkup();t&&this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}_clear(){this._parentElement.innerHTML=""}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${icons}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${icons}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var O;s.register("kPq84",(function(t,n){var r;e(t.exports,"getBundleURL",(()=>r),(e=>r=e));var a={};function s(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),a[e]=t),t}})),O=s("kPq84").getBundleURL("2G0cO")+s("bXuNP").resolve("41LG6");var E;E=s("kPq84").getBundleURL("2G0cO")+s("bXuNP").resolve("5k0fD");var L=new class extends w{_parentElement=document.querySelector(".group-list");_group=document.querySelector(".group");_addHandlerRender(e){window.addEventListener("load",e),this._group.addEventListener("click",(t=>{!t.target.closest(".group")||t.target.classList.contains("group__item--revise")||t.target.classList.contains("group__item--delete")||e()}))}_addHandlerAddActive(e){window.addEventListener("load",(()=>{this._generateActiveGroup(e())})),this._group.addEventListener("click",(t=>{if(t.target.classList.contains("group__item--delete"))return;if(!t.target.closest(".group-list__info"))return void this._generateActiveGroup(e());const n=t.target.closest(".group-list__info").classList[1];this._generateActiveGroup(e(n))}))}_addHandlerNewGroup(e){const t=document.querySelector(".group-create__form"),n=document.querySelector(".newGroupName");t.addEventListener("submit",(r=>{r.preventDefault(),e(),n.value="",t.classList.add("hidden")}))}_addHandlerReviseGroup(e){this._parentElement.addEventListener("click",(t=>{if(!t.target.classList.contains("group__item--revise"))return;const n=t.target.parentNode.parentNode.classList[1],r=t.target.parentNode.children[1];this._groupsSetDefault(),this._groupsSetInputField(r),r.addEventListener("keypress",(t=>{if("Enter"===t.key){if(""===r.value&&r.setAttribute("value",r.dataset.name),""!==r.value){if(e(n,r.value))return alert("已有相同群組，請重新命名"),void(r.value="");t.preventDefault(),r.setAttribute("value",r.value),e(n,r.value)}r.setAttribute("readonly",""),r.removeAttribute("placeholder")}}))}))}_addHandlerDeleteGroup(e){this._parentElement.addEventListener("click",(function(t){if(!t.target.closest(".group__item--delete"))return;const n=t.target.closest(".group-list__info").classList[1];e(n)}))}_addHandlerToggleSidebar(){window.addEventListener("click",(e=>{const t=document.getElementById("toggleGroupArea"),n=e.target.classList.contains("event__btn--groups"),r=e.target.classList.contains("group__btn--close"),a=e.target.closest(".group"),s=e.target.closest(".group-list__info");(n||r||t.checked&&!a&&!s)&&(this._groupsSetDefault(),t.checked=!t.checked)}))}_addHandlerToggleCreateWindow(){const e=document.querySelector(".group-create__btn"),t=document.querySelector(".group-create__form"),n=document.querySelector(".newGroupName");e.addEventListener("click",(function(){t.classList.toggle("hidden"),n.focus()}))}_groupsSetDefault=function(){document.querySelectorAll(".group-list__info .group__item--headline").forEach((e=>{e.setAttribute("readonly",""),e.removeAttribute("placeholder"),e.value=e.dataset.name}))};_groupsSetInputField=function(e){e.removeAttribute("readonly"),e.value="",e.setAttribute("placeholder","新群組名"),e.focus()};_addHandlerDeleteAllGroups=function(e){window.addEventListener("click",(t=>{if(!t.target.classList.contains("event__btn--deleteAllInfo"))return;if(confirm("您確定要刪除所有資料嗎？將會刪除所有的群組、使用者及記錄。")){if(!confirm("您確定嗎？"))return;e(),alert("所有資料已被刪除！"),location.reload()}}))};_generateActiveGroup(e){document.querySelectorAll(".group-list__info").forEach((e=>{e.classList.remove("active")})),document.querySelector(`.${e}`)&&document.querySelector(`.${e}`).classList.add("active")}_generateMarkup(){return this._data.map((e=>`\n      <div class="group-list__info ${e.id}">\n        <div class="group__items">\n          <div class="group__item--icon">\n            <span>${e.groupName.charAt(0)}</span>\n          </div>\n          <input\n            class="group__item--headline"\n            autocomplete="off"\n            readonly\n            required\n            maxlength="5"\n            placeholder=""\n            value="${e.groupName}"\n            data-name="${e.groupName}"\n          />\n          <div class="group__item--subhead">\n            ${e.users.length}位成員\n          </div>\n          <img class="group__item--revise" src="${t(O)}"></img>\n          <img class="group__item--delete" src="${t(E)}"></img>\n        </div>\n      </div>`)).reverse().join("")}};var G=new class extends w{_parentElement=document.querySelector(".event-form__input--payer");_addHandlerRender(e){window.addEventListener("load",(()=>{e()}))}_generateMarkup(){return this._data.map((e=>`<option value="${e.id}">${e.userName}</option>`)).join("")}};var j=new class extends w{_parentElement=document.querySelector(".event-form__input--sharers");_addHandlerRender(e){window.addEventListener("load",(()=>{e()}))}_addHandlerMarkSharer(){this._parentElement.addEventListener("click",(e=>{e.target.classList.contains("event-form__input--sharer")&&(e.target.previousElementSibling.checked||e.target.classList.add("checked"),e.target.previousElementSibling.checked&&e.target.classList.remove("checked"))}))}_addHandlerSelectAll(){window.addEventListener("click",(e=>{if(!e.target.classList.contains("selectedAll"))return;const t=document.querySelector(".selectedAllCheckbox"),n=document.querySelectorAll(".checkbox");t.checked||n.forEach((e=>{e.checked=!0,e.nextElementSibling.classList.add("checked")})),t.checked&&n.forEach((e=>{e.checked=!1,e.nextElementSibling.classList.remove("checked")}))}))}_generateMarkup(){return this._data.map((e=>`\n        <input class="checkbox ${e.id}" type="checkbox" id="${e.id}" value="${e.userName}"/>\n        <label class="event-form__input--sharer" for="${e.id}">${e.userName}</label>\n        `)).join("")+(this._data.length>1?'\n        <input class="selectedAllCheckbox" type="checkbox" id="selectedAll" value = "selectedAll">\n        <label class="event-form__input--sharer selectedAll" for="selectedAll">全選</label>\n        ':"")}};var k=new class extends w{_parentElement=document.querySelector(".user__infos");_addHandlerRender(e){window.addEventListener("load",e)}_addHandlerNewUser(e){const t=document.querySelector(".user-form__input--newUserName"),n=document.querySelector(".user__infos"),r=document.querySelector(".user-form"),a=document.querySelector(".user-form__input--newUserName");r.addEventListener("submit",(r=>{r.preventDefault(),e(t.value);const s=n.children[n.children.length-1].id;document.querySelector(`.user__info #${s}`).scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"}),a.value=""}))}_addHandlerDeleteUser(e){document.querySelector(".userMngt").addEventListener("click",(t=>{if(!t.target.classList.contains("user__info__btn--delete"))return;const n=t.target.parentElement.parentElement.id;e(n)}))}_addHandlerToggleWindow(){window.addEventListener("click",(e=>{const t=e.target.classList.contains("event__btn--usersMngt"),n=document.querySelector(".userMngt"),r=e.target.classList.contains("userMngt__btn--close"),a=e.target.closest(".user__info__btns"),s=document.querySelector(".user-form");(t||r||!n.classList.contains("hidden")&&!e.target.closest(".userMngt")&&!a)&&(n.classList.toggle("hidden"),this._usersSetDefault(),s.classList.add("hidden"))}))}_addHandlerToggleNewUserWindow(){const e=document.querySelector(".userMngt-header__btn--createNewUser"),t=document.querySelector(".user-form__input--newUserName");e.addEventListener("click",(function(){document.querySelector(".user-form").classList.toggle("hidden"),t.focus()}))}_addHandlerReviseUser(e){this._parentElement.addEventListener("click",(t=>{if(!t.target.classList.contains("user__info__btn--revise"))return;const n=document.querySelectorAll(".user__info--name"),r=t.target.parentNode.parentNode.id,a=t.target.parentNode.parentNode.children[0];this._usersSetDefault(),this._usersSetInputField(a),n.forEach((t=>t.addEventListener("keypress",(t=>{"Enter"===t.key&&(""===a.value?a.setAttribute("value",a.dataset.name):a.setAttribute("value",a.value),a.setAttribute("readonly",""),a.removeAttribute("placeholder"),e(r,a.value))}))))}))}_usersSetDefault=function(){document.querySelectorAll(".user__info--name").forEach((e=>{e.setAttribute("readonly",""),e.removeAttribute("placeholder"),e.value=e.dataset.name}))};_usersSetInputField=function(e){e.setAttribute("data-name",e.value),e.removeAttribute("readonly"),e.removeAttribute("value"),e.setAttribute("placeholder","請輸入新名稱"),e.value="",e.focus()};_generateMarkup(){return this._data.map((e=>`\n        <div class="user__info" id=${e.id}>\n          <input class="user__info--name" id=${e.id} maxlength="5" autocomplete="off" readonly value="${e.userName}" data-name="${e.userName}">\n\n          <div class="user__info__btns">\n            <img class="user__info__btn--revise"src="${t(O)}"></img>\n            <img class="user__info__btn--delete"src="${t(E)}"></img>\n          </div>\n      </div>`)).join("")}};var H=new class extends w{_parentElement=document.querySelector(".event-list");_addHandlerRender(e){window.addEventListener("load",e)}_addHandlerNewEvent(e){document.querySelector(".event-form").addEventListener("submit",(function(t){t.preventDefault(),e()}))}_addHandlerDeleteEvent(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.id;t.target.classList.contains("event__info__btn--delete")&&e(n)}))}_addHandlerScrolltoEventTop(){window.addEventListener("click",(function(e){e.target.classList.contains("event__btn--gotoTop")&&document.querySelector(".event__content")?.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}))}_generateMarkup(){const e=new Intl.NumberFormat("en-US");return` \n      <div class="event__info">\n        <div class="event__info__btn--delete" id=${this._data.id}>x</div>\n          <div class="event__info--group">\n            <span class="event__info--group-value">${this._data.group}</span>\n          </div>\n        <div class="event__product">\n          <div class="event__info--type">\n            <span class="event__info--type-value">${this._data.type}</span>\n          </div>\n          <div class="event__info--productName">\n            <span class="event__info--productName-value">${this._data.productName}\n            </span>\n          </div>\n          <div class="event__info--note">\n            <span class="event__info--note-value">${this._data.note}</span>\n          </div>\n        </div>\n        <div class="event__info--spend">\n          <span class="event__info--spend-value">\n            ${e.format(this._data.spend)}\n          </span>\n          <span class="event__info--spend-unit">NTD</span>\n        </div>\n        <div class="event__info--payer">\n          <class="event__info--payer-value">付款人 : ${this._data.payer}</span>\n        </div>\n        <div class="event__info--sharer">\n          <span class="event__info--sharer-value">分款人 :\n          ${this._data.isAllMember?"全員":this._data.sharer}\n          </span>\n        </div>\n      </div>\n      `}};var A=new class extends w{_parentElement=document.querySelector(".event-list");_addHandlerNewEventHeader(e){e()}_generateMarkup(){return`\n      <div class="event__content">\n        <div class="event__content--dateHeader">${this._data.date}</div>\n        <div class="event__infos Date${this._data.date}"></div>\n      </div>\n      `}};var $=new class extends w{_parentElement=document.querySelector(".balance__infos");_addHandlerToggleSidebar(){window.addEventListener("click",(e=>{const t=document.getElementById("toggleBalanceArea"),n=e.target.classList.contains("event__btn--balance"),r=e.target.classList.contains("balance__btn--close"),a=e.target.closest(".balance");(n||r||t.checked&!a)&&(t.checked=!t.checked)}))}_generateMarkup(){const e=new Intl.NumberFormat("en-US");return this._data.map((t=>`\n      <div class="balance__info" id=${t.id}>\n        <div class="balance__info--name"><strong>${t.userName}</strong></div>\n        <div class="balance__info--money">\n        ${Number(Math.round(t.balance))>0?`需收${e.format(Number(Math.round(t.balance)))}元`:0===Number(Math.round(t.balance))?"無":`需付${e.format(Number(Math.round(-t.balance)))}元\n            `}\n        </div>\n      </div>`)).join("")}};var q=new class extends w{_parentElement=document.querySelector(".debt__infos");_generateMarkup(){const e=new Intl.NumberFormat("en-US");return this._data?this._data.map((t=>`\n      <div class="debt__info">\n        <span><strong>${t.debtor}</strong></span>\n        需支付給\n        <span><strong>${t.creditor}</strong></span>${e.format(Number(Math.round(t.payment)))}元\n      </div>`)).join(""):'<div class="debt__info">尚無應收/應付帳款</div>'}};const x=function(){L.render(c.groupObject),G.render(c.activeGroup[0].users),j.render(c.activeGroup[0].users),k.render(c.activeGroup[0].users),W(),L._generateActiveGroup(c.activeGroup[0].id)},M=function(){L.render(c.groupObject)},I=function(e){return e?(l(c.groupObject.find((t=>t.id===e))),x(),e):c.activeGroup[0].id},D=function(){const e=document.querySelector(".newGroupName").value;u(e),x(),L._generateActiveGroup(c.activeGroup[0].id)},R=function(e){1!==c.groupObject.length?(!function(e){const t=c.groupObject.find((t=>t.id===e)),n=c.groupObject.indexOf(t);c.groupObject.splice(n,1),c.activeGroup.splice(0,1),c.activeGroup.push(c.groupObject[n-1>0?n-1:0]),y()}(e),x()):alert("請先新增群組，再刪除此群組")},U=function(e,t){if(c.groupObject.some((e=>e.groupName===t)))return l(),x(),!0;!function(e,t){c.groupObject.find((t=>t.id===e)).groupName=t}(e,t),l(),x()},T=function(){G.render(c.activeGroup[0].users)},F=function(){j.render(c.activeGroup[0].users)},P=function(){k.render(c.activeGroup[0].users)},B=function(e){!function(e){console.log(e),""!==e.value?(p(e),y(),e.value=""):alert("名稱不可為空")}(e),_(),b(),x()},C=function(e){!function(e){const t=c.groupObject.find((e=>e.id===c.activeGroup[0].id)),n=c.groupObject.indexOf(t),r=c.activeGroup[0].users.find((t=>t.id===e)),a=c.activeGroup[0].users.indexOf(r);0!==a?0===r.balance?(c.groupObject[n].users.splice(a,1),l(c.groupObject[n]),y()):alert("帳款尚未平衡"):alert("無法刪除自己")}(e),_(),b(),x()},W=function(){document.querySelector(".event-list").innerHTML="",c.eventDateList=[],c.activeGroup[0].events.map((e=>{(function(e){return!new Set(c.eventDateList).has(e.date)&&(c.eventDateList.push(e.date),y(),!0)})(e)&&A.render(e,!1),H._parentElement=document.querySelector(`.Date${e.date}`),H.render(e,!1)})),H._parentElement=document.querySelector(".event-list"),$.render(c.activeGroup[0].users),q.render(function(){const e=[],t=[];if(!c.activeGroup[0])return;c.activeGroup[0].users.map((t=>{e.push([`${t.userName}`,`${t.balance}`])})),e.sort(((e,t)=>t[1]-e[1]));let n=e[0][0],r=e[e.length-1][0],a=+e[0][1],s=+e[e.length-1][1];if(1===e.length||0===a&&0===s)return!1;for(;a>0&&s<0;)if(a>s){if(Math.abs(a)>Math.abs(s))e[0][1]=a+s,e[e.length-1][1]=s-s,t.push({creditor:n,debtor:r,payment:-s});else{if(!(Math.abs(a)<Math.abs(s)||Math.abs(a)===Math.abs(s)&&0!==a))return;e[0][1]=a-a,e[e.length-1][1]=s+a,t.push({creditor:n,debtor:r,payment:a})}e.sort(((e,t)=>t[1]-e[1])),n=e[0][0],r=e[e.length-1][0],a=Number(e[0][1]),s=Number(e[e.length-1][1])}return t}())},J=function(){f(),0!==c.sharerId.length?(v(),m(),y(),c.sharerId=[],c.sharer=[]):alert("分款者為必填"),W()},X=function(e){!function(e){const t=c.activeGroup[0].events.find((t=>t.id===e)),n=c.activeGroup[0].events.indexOf(t),r=c.groupObject.find((e=>e.id===c.activeGroup[0].id)),a=c.groupObject.indexOf(r);g(e),c.groupObject[a].events.splice(n,1),m(),l(c.groupObject[a]),y()}(e),W()},V=function(){localStorage.clear()},Y=function(e,t){c.activeGroup[0].users.map((e=>e.userName===t)).includes(!0)?alert("已有相同使用者，請重新輸入"):(!function(e,t){const n=c.groupObject.find((e=>e.id===c.activeGroup[0].id)),r=c.groupObject.indexOf(n);c.groupObject[r].users.find((t=>t.id===e)).userName=t}(e,t),l(),x())};L._addHandlerRender(M),L._addHandlerAddActive(I),G._addHandlerRender(T),j._addHandlerRender(F),k._addHandlerRender(P),H._addHandlerRender(W),j._addHandlerMarkSharer(),L._addHandlerNewGroup(D),H._addHandlerNewEvent(J),k._addHandlerNewUser(B),H._addHandlerDeleteEvent(X),L._addHandlerDeleteGroup(R),k._addHandlerDeleteUser(C),L._addHandlerReviseGroup(U),k._addHandlerReviseUser(Y),L._addHandlerToggleSidebar(),L._addHandlerToggleCreateWindow(),$._addHandlerToggleSidebar(),k._addHandlerToggleWindow(),k._addHandlerToggleNewUserWindow(),j._addHandlerSelectAll(),H._addHandlerScrolltoEventTop(),L._addHandlerDeleteAllGroups(V);
//# sourceMappingURL=index.3eb5a8b9.js.map
