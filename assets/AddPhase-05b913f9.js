import{_ as w,au as $,an as E,u as S,a as g,r as U,o as q,bD as D,b as I,c as F,d,t as _,ab as l,w as t,bE as Y,ap as k,E as z,O as h,aq as M}from"./index-550fe8a6.js";import{a as R,E as C}from"./el-form-item-a34d925b.js";import{E as T,a as B}from"./Editor-5b0c56ef.js";import{E as H}from"./el-switch-206d1313.js";import{l as A}from"./challenge-cbc6c818.js";import"./castArray-42bc9754.js";import"./_initCloneObject-b521214e.js";import"./flatten-c595264c.js";import"./index-e30dcb43.js";import"./isEqual-b8955e6d.js";const N={class:"container"},O={class:"container-main mb24"},Z={class:"title"},j={class:"inline-title"},G={class:"inline-title"},L={class:"inline-title"},J={class:"flex-between",style:{width:"100%"}},K={class:"inline-title"},Q={class:"inline-title"},W={__name:"AddPhase",setup(X){const u=$(),{t:p}=E(),b=S(),e=g({id:void 0,name:"",description:"",leaderboard_public:!1,is_public:!0,is_submission_public:!0,start_date:"",end_date:"",test_annotation_file:"",codename:"",max_submissions_per_day:"",max_submissions_per_month:"",max_submissions:"",is_restricted_to_select_one_submission:!1,is_partial_submission_evaluation_enabled:!1,allowed_submission_file_types:""}),c=U(),m=(s,a,n)=>{!a||a=="<p><br></p>"?n(new Error(s.field+" is required")):n()},y=g({name:[{required:!0,message:"title is required",trigger:"blur"},{min:3,max:100,message:"Length should be 3 to 100",trigger:"blur"}],description:[{validator:m,trigger:"blur"}],evaluation_details:[{validator:m,trigger:"blur"}],terms_and_conditions:[{validator:m,trigger:"blur"}],submission_guidelines:[{validator:m,trigger:"blur"}],leaderboard_description:[{validator:m,trigger:"blur"}],max_submissions_per_day:[{pattern:/^-?\d+(\.\d+)?$/,message:"Enter numbers only",trigger:"blur"}],max_submissions_per_month:[{pattern:/^-?\d+(\.\d+)?$/,message:"Enter numbers only",trigger:"blur"}],max_submissions:[{pattern:/^-?\d+(\.\d+)?$/,message:"Enter numbers only",trigger:"blur"}]}),x=async s=>{s&&await s.validate((a,n)=>{a&&Y(u.params.challengeId,{id:e.id,name:e.name,description:e.description,leaderboard_public:e.leaderboard_public,is_public:e.is_public,is_submission_public:e.is_submission_public,start_date:e.start_date,end_date:e.end_date,test_annotation_file:e.test_annotation_file,codename:e.codename,max_submissions_per_day:e.max_submissions_per_day,max_submissions_per_month:e.max_submissions_per_month,max_submissions:e.max_submissions,is_restricted_to_select_one_submission:e.is_restricted_to_select_one_submission,is_partial_submission_evaluation_enabled:e.is_partial_submission_evaluation_enabled,allowed_submission_file_types:e.allowed_submission_file_types}).then(o=>{k.success(e.id!==void 0?p("addPhase.updateSuccess"):p("addPhase.createSuccess")),b.push("/host")})})},v=()=>{b.push("/host")};return q(()=>{u.params.challengeId!==void 0&&A(u.params.challengeId).then(s=>{e.title=s.title}),u.params.phaseId!==void 0&&D(u.params.challengeId,u.params.phaseId).then(s=>{e.name=s.name,e.description=s.description,e.leaderboard_public=s.leaderboard_public,e.is_public=s.is_public,e.is_submission_public=s.is_submission_public,e.start_date=s.start_date,e.end_date=s.end_date,e.test_annotation_file=s.test_annotation_file,e.codename=s.codename,e.max_submissions_per_day=s.max_submissions_per_day,e.max_submissions_per_month=s.max_submissions_per_month,e.max_submissions=s.max_submissions,e.is_restricted_to_select_one_submission=s.is_restricted_to_select_one_submission,e.is_partial_submission_evaluation_enabled=s.is_partial_submission_evaluation_enabled,e.allowed_submission_file_types=s.allowed_submission_file_types,e.id=s.id})}),(s,a)=>{const n=M,o=C,r=H,f=B,P=R,V=z;return I(),F("div",N,[d("div",O,[d("div",Z,_(e.title),1),l(P,{ref_key:"ruleFormRef",ref:c,model:e,rules:y,"label-width":"200px","label-position":"top",size:"default","status-icon":"","hide-required-asterisk":""},{default:t(()=>[l(o,{label:s.$t("addPhase.name"),prop:"name"},{default:t(()=>[l(n,{modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=i=>e.name=i),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"]),l(o,{label:s.$t("addChall.desc"),prop:"description"},{default:t(()=>[l(T,{modelValue:e.description,"onUpdate:modelValue":a[1]||(a[1]=i=>e.description=i)},null,8,["modelValue"])]),_:1},8,["label"]),l(o,{prop:"leaderboard_public"},{default:t(()=>[d("span",j,_(s.$t("addPhase.lbPublic")),1),l(r,{modelValue:e.leaderboard_public,"onUpdate:modelValue":a[2]||(a[2]=i=>e.leaderboard_public=i),size:"small"},null,8,["modelValue"])]),_:1}),l(o,{prop:"is_public"},{default:t(()=>[d("span",G,_(s.$t("addPhase.isPublic")),1),l(r,{modelValue:e.is_public,"onUpdate:modelValue":a[3]||(a[3]=i=>e.is_public=i),size:"small"},null,8,["modelValue"])]),_:1}),l(o,{prop:"is_submission_public"},{default:t(()=>[d("span",L,_(s.$t("addPhase.isSubmiPublic")),1),l(r,{modelValue:e.is_submission_public,"onUpdate:modelValue":a[4]||(a[4]=i=>e.is_submission_public=i),size:"small"},null,8,["modelValue"])]),_:1}),l(o,null,{default:t(()=>[d("div",J,[l(o,{label:s.$t("addPhase.startDate"),prop:"start_date",required:""},{default:t(()=>[l(f,{modelValue:e.start_date,"onUpdate:modelValue":a[5]||(a[5]=i=>e.start_date=i),type:"datetime",placeholder:"Select date and time","value-format":"YYYY-MM-DDTHH:mm:ssZ",style:{width:"500px"}},null,8,["modelValue"])]),_:1},8,["label"]),l(o,{label:s.$t("addPhase.endDate"),prop:"end_date",required:""},{default:t(()=>[l(f,{modelValue:e.end_date,"onUpdate:modelValue":a[6]||(a[6]=i=>e.end_date=i),type:"datetime",placeholder:"Select date and time","value-format":"YYYY-MM-DDTHH:mm:ssZ",style:{width:"500px"}},null,8,["modelValue"])]),_:1},8,["label"])])]),_:1}),l(o,{label:s.$t("addPhase.codename"),prop:"codename",required:""},{default:t(()=>[l(n,{modelValue:e.codename,"onUpdate:modelValue":a[7]||(a[7]=i=>e.codename=i),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"]),l(o,{label:s.$t("addPhase.maxSubmiPerDay"),prop:"max_submissions_per_day",required:""},{default:t(()=>[l(n,{modelValue:e.max_submissions_per_day,"onUpdate:modelValue":a[8]||(a[8]=i=>e.max_submissions_per_day=i),maxlength:"32"},null,8,["modelValue"])]),_:1},8,["label"]),l(o,{label:s.$t("addPhase.maxSubmiPerMonth"),prop:"max_submissions_per_month",required:""},{default:t(()=>[l(n,{modelValue:e.max_submissions_per_month,"onUpdate:modelValue":a[9]||(a[9]=i=>e.max_submissions_per_month=i),maxlength:"32"},null,8,["modelValue"])]),_:1},8,["label"]),l(o,{label:s.$t("addPhase.maxSubmissions"),prop:"max_submissions",required:""},{default:t(()=>[l(n,{modelValue:e.max_submissions,"onUpdate:modelValue":a[10]||(a[10]=i=>e.max_submissions=i),maxlength:"32"},null,8,["modelValue"])]),_:1},8,["label"]),l(o,{prop:"is_restricted_to_select_one_submission"},{default:t(()=>[d("span",K,_(s.$t("addPhase.isRestrictedToSelectOneSubmission")),1),l(r,{modelValue:e.is_restricted_to_select_one_submission,"onUpdate:modelValue":a[11]||(a[11]=i=>e.is_restricted_to_select_one_submission=i),size:"small"},null,8,["modelValue"])]),_:1}),l(o,{prop:"is_partial_submission_evaluation_enabled"},{default:t(()=>[d("span",Q,_(s.$t("addPhase.isPartialSubmissionEvaluationEnabled")),1),l(r,{modelValue:e.is_partial_submission_evaluation_enabled,"onUpdate:modelValue":a[12]||(a[12]=i=>e.is_partial_submission_evaluation_enabled=i),size:"small"},null,8,["modelValue"])]),_:1}),l(o,{label:s.$t("addPhase.allowedSubmissionFileTypes"),prop:"allowed_submission_file_types",required:""},{default:t(()=>[l(n,{modelValue:e.allowed_submission_file_types,"onUpdate:modelValue":a[13]||(a[13]=i=>e.allowed_submission_file_types=i),placeholder:"eg: .json, .zip"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),l(V,{style:{width:"180px","border-radius":"2px"},type:"primary",onClick:a[14]||(a[14]=i=>x(c.value))},{default:t(()=>[h(_(e.id?s.$t("save"):s.$t("create")),1)]),_:1}),l(V,{style:{width:"180px","border-radius":"2px"},onClick:a[15]||(a[15]=i=>v())},{default:t(()=>[h(_(s.$t("cancel")),1)]),_:1})])}}},ue=w(W,[["__scopeId","data-v-232185c8"]]);export{ue as default};
