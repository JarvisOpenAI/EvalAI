import{_ as v,ao as $,u as E,an as S,a as c,r as F,b as I,c as q,d as i,t as d,ab as o,w as n,F as K,ax as f,p as M,j as P,cl as U,ap as k,aq as H}from"./index-550fe8a6.js";import{a as B,E as C}from"./el-form-item-a34d925b.js";import{E as L}from"./el-loading-4f28edba.js";import"./castArray-42bc9754.js";import"./_initCloneObject-b521214e.js";const N=p=>(M("data-v-d5b44bc5"),p=p(),P(),p),j=N(()=>i("div",{class:"logo"},[i("img",{src:U,alt:""})],-1)),D={class:"greet"},R={class:"center"},z={style:{color:"#ffffff"},href:"/auth/login"},A={__name:"Signup",setup(p){const w=$(),_=E(),{t:a,locale:G}=S(),s=c({username:"",password:"",confirmpw:"",email:""}),b=(e,r,l)=>{r!==s.password?l(new Error(a("signup.confirmpwVerify1"))):l()},h=c({username:[{required:!0,message:a("signup.usernameVerify1"),trigger:"blur"},{pattern:/^.{3,}$/,message:a("signup.usernameVerify2"),trigger:"blur"}],email:[{required:!0,message:a("signup.emailVerify1"),trigger:"blur"},{type:"email",message:a("signup.emailVerify2"),trigger:"blur"}],password:[{required:!0,message:a("signup.passwordVerify1"),trigger:"blur"},{pattern:/^.{8,}$/,message:a("signup.passwordVerify2"),trigger:"blur"}],confirmpw:[{required:!0,message:a("signup.passwordVerify1"),trigger:"blur"},{validator:b,trigger:"blur"}]}),g=F(),m=()=>{g.value.validate(e=>{e&&y()})},y=()=>{const e=L.service();w.dispatch("signUp",{username:s.username,password1:s.password,password2:s.confirmpw,email:s.email}).then(r=>{e.close(),k.success(a("signup.registerSuccess")),_.push("/")}).catch(r=>{e.close()})};return(e,r)=>{const l=H,u=C,V=B;return I(),q(K,null,[j,i("div",D,d(e.$t("greeting")),1),o(V,{ref_key:"inputForm",ref:g,model:s,rules:h,class:"auth-form","label-position":"top","validate-on-rule-change":!1,"require-asterisk-position":"right"},{default:n(()=>[o(u,{label:e.$t("signup.username"),prop:"username"},{default:n(()=>[o(l,{modelValue:s.username,"onUpdate:modelValue":r[0]||(r[0]=t=>s.username=t),modelModifiers:{trim:!0},placeholder:e.$t("signup.usernamePH"),class:"input-item",maxlength:"150"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(u,{label:e.$t("signup.email"),prop:"email"},{default:n(()=>[o(l,{modelValue:s.email,"onUpdate:modelValue":r[1]||(r[1]=t=>s.email=t),modelModifiers:{trim:!0},placeholder:e.$t("signup.emailPH"),type:"email",class:"input-item",maxlength:"70"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(u,{label:e.$t("signup.password"),prop:"password"},{default:n(()=>[o(l,{class:"input-item",type:"password",modelValue:s.password,"onUpdate:modelValue":r[2]||(r[2]=t=>s.password=t),modelModifiers:{trim:!0},placeholder:e.$t("signup.passwordPH"),onKeypress:f(m,["enter"]),maxlength:"128","show-password":""},null,8,["modelValue","placeholder","onKeypress"])]),_:1},8,["label"]),o(u,{label:e.$t("signup.confirmpw"),prop:"confirmpw"},{default:n(()=>[o(l,{class:"input-item",type:"password",modelValue:s.confirmpw,"onUpdate:modelValue":r[3]||(r[3]=t=>s.confirmpw=t),modelModifiers:{trim:!0},placeholder:e.$t("signup.confirmpwPH"),onKeypress:f(m,["enter"]),maxlength:"128","show-password":""},null,8,["modelValue","placeholder","onKeypress"])]),_:1},8,["label"]),i("div",{class:"auth-submit-btn",onClick:m},d(e.$t("signup.signup")),1)]),_:1},8,["model","rules"]),i("div",R,[i("a",z,d(e.$t("signup.goLogin")),1)])],64)}}},X=v(A,[["__scopeId","data-v-d5b44bc5"]]);export{X as default};
