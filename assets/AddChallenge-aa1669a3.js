import{_ as Y,an as q,u as M,au as z,a as y,r as F,o as R,b as m,c as _,d as u,ab as d,w as s,bz as B,ap as b,E as H,t as c,O as $,aq as x,p as P,j}from"./index-550fe8a6.js";import{a as A,E as L}from"./el-form-item-a34d925b.js";import{E as N}from"./el-switch-206d1313.js";import{E as n,a as T}from"./Editor-5b0c56ef.js";import{E as O}from"./el-progress-421d7460.js";import{l as Z}from"./challenge-cbc6c818.js";import"./castArray-42bc9754.js";import"./_initCloneObject-b521214e.js";import"./flatten-c595264c.js";import"./index-e30dcb43.js";import"./isEqual-b8955e6d.js";const G=p=>(P("data-v-9f94fd60"),p=p(),j(),p),W={class:"container"},J={class:"container-main mb24"},K=["src"],Q={key:1,class:"avatar-uploader-icon"},X={class:"icon",style:{"font-size":"24px"},"aria-hidden":"true"},ee=G(()=>u("use",{"xlink:href":"#icon-chuangjian"},null,-1)),ae=[ee],te={class:"mt24"},le={class:"flex-between",style:{width:"100%"}},de={class:"inline-title"},ie={__name:"AddChallenge",setup(p){const{t:f}=q(),g=M(),h=z(),e=y({id:void 0,title:"",short_description:"",description:"",evaluation_details:"",terms_and_conditions:"",image:"",submission_guidelines:"",leaderboard_description:"",evaluation_script:"",remote_evaluation:!1,is_docker_based:!1,start_date:"",end_date:"",published:!1}),E=a=>{if(a.raw.type.startsWith("image/")){if(a.raw.size/1024/1024>5)return b.error("Picture size can not exceed 5MB!"),!1}else return b.error("Please select a picture!"),!1;e.image=a.raw,e.imageUrl=URL.createObjectURL(a.raw)},v=F(),o=(a,t,r)=>{!t||t=="<p><br></p>"?r(new Error(a.field+" is required")):r()},U=y({title:[{required:!0,message:"title is required",trigger:"blur"},{min:3,max:100,message:"Length should be 3 to 100",trigger:"blur"}],short_description:[{validator:o,trigger:"blur"}],description:[{validator:o,trigger:"blur"}],evaluation_details:[{validator:o,trigger:"blur"}],terms_and_conditions:[{validator:o,trigger:"blur"}],submission_guidelines:[{validator:o,trigger:"blur"}],leaderboard_description:[{validator:o,trigger:"blur"}]}),D=async a=>{a&&await a.validate((t,r)=>{if(t){let l=new FormData;l.append("title",e.title),l.append("short_description",e.short_description),l.append("description",e.description),l.append("evaluation_details",e.evaluation_details),l.append("terms_and_conditions",e.terms_and_conditions),l.append("submission_guidelines",e.submission_guidelines),l.append("leaderboard_description",e.leaderboard_description),l.append("start_date",e.start_date),l.append("end_date",e.end_date),l.append("published",e.published),l.append("image",e.image),e.id&&l.append("id",e.id),B(l).then(V=>{b.success(e.id!==void 0?f("addChall.updateSuccess"):f("addChall.createSuccess")),g.push("/host")})}})},k=()=>{g.push("/host")};return R(()=>{h.params.challengeId!==void 0&&Z(h.params.challengeId).then(a=>{e.title=a.title,e.short_description=a.short_description,e.description=a.description,e.evaluation_details=a.evaluation_details,e.terms_and_conditions=a.terms_and_conditions,e.submission_guidelines=a.submission_guidelines,e.leaderboard_description=a.leaderboard_description,e.start_date=a.start_date,e.end_date=a.end_date,e.published=a.published,e.id=a.id,e.image=a.image})}),(a,t)=>{const r=x,l=L,V=O,C=T,S=N,I=A,w=H;return m(),_("div",W,[u("div",J,[d(I,{ref_key:"ruleFormRef",ref:v,model:e,rules:U,"label-width":"200px","label-position":"top",size:"default","status-icon":"","hide-required-asterisk":""},{default:s(()=>[d(l,{label:a.$t("addChall.title"),prop:"title"},{default:s(()=>[d(r,{modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=i=>e.title=i),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"]),d(l,{label:a.$t("addChall.shortDesc"),prop:"short_description"},{default:s(()=>[d(n,{modelValue:e.short_description,"onUpdate:modelValue":t[1]||(t[1]=i=>e.short_description=i)},null,8,["modelValue"])]),_:1},8,["label"]),d(l,{label:a.$t("addChall.desc"),prop:"description"},{default:s(()=>[d(n,{modelValue:e.description,"onUpdate:modelValue":t[2]||(t[2]=i=>e.description=i)},null,8,["modelValue"])]),_:1},8,["label"]),d(l,{label:a.$t("addChall.evaluation"),prop:"evaluation_details"},{default:s(()=>[d(n,{modelValue:e.evaluation_details,"onUpdate:modelValue":t[3]||(t[3]=i=>e.evaluation_details=i)},null,8,["modelValue"])]),_:1},8,["label"]),d(l,{label:a.$t("addChall.termsConditions"),prop:"terms_and_conditions"},{default:s(()=>[d(n,{modelValue:e.terms_and_conditions,"onUpdate:modelValue":t[4]||(t[4]=i=>e.terms_and_conditions=i)},null,8,["modelValue"])]),_:1},8,["label"]),d(l,{label:a.$t("addChall.image"),prop:"image"},{default:s(()=>[d(V,{class:"avatar-uploader",name:"image","show-file-list":!1,"on-change":E,"auto-upload":!1},{default:s(()=>[e.image?(m(),_("img",{key:0,src:e.imageUrl||e.image,class:"avatar"},null,8,K)):(m(),_("span",Q,[(m(),_("svg",X,ae)),u("span",te,c(a.$t("addChall.imagePH")),1)]))]),_:1})]),_:1},8,["label"]),d(l,{label:a.$t("addChall.SubmiGuide"),prop:"submission_guidelines"},{default:s(()=>[d(n,{modelValue:e.submission_guidelines,"onUpdate:modelValue":t[5]||(t[5]=i=>e.submission_guidelines=i)},null,8,["modelValue"])]),_:1},8,["label"]),d(l,{label:a.$t("addChall.lbDesc"),prop:"leaderboard_description"},{default:s(()=>[d(n,{modelValue:e.leaderboard_description,"onUpdate:modelValue":t[6]||(t[6]=i=>e.leaderboard_description=i)},null,8,["modelValue"])]),_:1},8,["label"]),d(l,null,{default:s(()=>[u("div",le,[d(l,{label:a.$t("addChall.startDate"),prop:"start_date",required:""},{default:s(()=>[d(C,{modelValue:e.start_date,"onUpdate:modelValue":t[7]||(t[7]=i=>e.start_date=i),type:"datetime",placeholder:"Select date and time","value-format":"YYYY-MM-DDTHH:mm:ssZ",style:{width:"500px"}},null,8,["modelValue"])]),_:1},8,["label"]),d(l,{label:a.$t("addChall.endDate"),prop:"end_date",required:""},{default:s(()=>[d(C,{modelValue:e.end_date,"onUpdate:modelValue":t[8]||(t[8]=i=>e.end_date=i),type:"datetime",placeholder:"Select date and time","value-format":"YYYY-MM-DDTHH:mm:ssZ",style:{width:"500px"}},null,8,["modelValue"])]),_:1},8,["label"])])]),_:1}),d(l,{prop:"published"},{default:s(()=>[u("span",de,c(a.$t("addChall.published")),1),d(S,{modelValue:e.published,"onUpdate:modelValue":t[9]||(t[9]=i=>e.published=i),size:"small"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),d(w,{style:{width:"180px","border-radius":"2px"},type:"primary",onClick:t[10]||(t[10]=i=>D(v.value))},{default:s(()=>[$(c(e.id?a.$t("save"):a.$t("create")),1)]),_:1}),d(w,{style:{width:"180px","border-radius":"2px"},onClick:t[11]||(t[11]=i=>k())},{default:s(()=>[$(c(a.$t("cancel")),1)]),_:1})])}}},ge=Y(ie,[["__scopeId","data-v-9f94fd60"]]);export{ge as default};
