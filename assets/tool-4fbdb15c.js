import{bB as n,bC as l}from"./index-550fe8a6.js";function m(s={},t={}){const{icon:e,title:o="删除所选任务",message:a="删除后将无法恢复，请确认是否删除?",confirmButtonText:i=n.global.t("yes"),cancelButtonText:r=n.global.t("no")}=s;let c=e?"":"display:none;";return l.confirm(`
    <div class="title">
      <svg class="icon" aria-hidden="true" style="font-size: 21px;${c}">
        <use xlink:href="${e}"></use>
      </svg>
      <span>${o}</span>
    </div>
    <div class="content">${a}</div>
  `,{dangerouslyUseHTMLString:!0,confirmButtonText:i,cancelButtonText:r,cancelButtonClass:"is-text is-has-bg",customClass:"oa-message-box",...t})}function g(s){const t=new Date(s),e={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};return t.toLocaleString(n.global.locale.value,e)}export{g as f,m as o};
