import{_ as b,u as k,r as u,a as C,o as y,b as l,c as r,d as e,t as o,F as g,e as N,f as S,w as B,g as I,h as M,E as $,i as d,n as w,p as x,j as L}from"./index-550fe8a6.js";import{f as p}from"./tool-4fbdb15c.js";import{r as z}from"./banner-365c983e.js";const E=n=>(x("data-v-a7be3f36"),n=n(),L(),n),T={class:"title mb24"},D=["onClick"],F={class:"left-con"},H={class:"second-title mb24"},V={class:"describe mb24"},j=["innerHTML"],A={class:"flex-center"},P={class:"custom-tag"},R={class:"custom-tag"},q=E(()=>e("svg",{class:"icon mr8","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-load"})],-1)),G={__name:"Challenge",setup(n){const h=k();u([{id:100},{id:93}]);const m=t=>{h.push(`/challenge/detail/${t.id}`)},c=u([]),a=C({total:0,pageNum:1,pageSize:10}),_=()=>{M("present","approved","public",{page:a.pageNum}).then(t=>{a.total=t.count;let i=t.results||[];c.value=a.pageNum===1?i:c.value.concat(i)})};y(()=>{_()});const v=()=>{a.pageNum+=1,_()};return(t,i)=>{const f=$;return l(),r(g,null,[e("div",T,o(t.$t("challenge.challenge")),1),(l(!0),r(g,null,N(c.value,s=>(l(),r("div",{class:"card mb24",key:s,onClick:J=>m(s)},[e("div",F,[e("div",H,o(s.title),1),e("div",V,[e("div",{innerHTML:s.short_description,class:"editor-content-view"},null,8,j)]),e("div",A,[e("div",P,o(t.$t("challenge.ongoing")),1),e("div",R,o(d(p)(s.start_date))+" -- "+o(d(p)(s.end_date)),1)])]),e("div",{class:"right-con",style:w({backgroundImage:s.image?"url("+s.image+")":"url("+d(z)+")"})},null,4)],8,D))),128)),a.total>a.pageNum*a.pageSize?(l(),S(f,{key:0,link:"",onClick:v},{default:B(()=>[q,e("span",null,o(t.$t("loadMore"))+"...",1)]),_:1})):I("",!0)],64)}}},U=b(G,[["__scopeId","data-v-a7be3f36"]]);export{U as default};
