"use strict";(self.webpackChunkpass_app_frontend_js=self.webpackChunkpass_app_frontend_js||[]).push([[846],{5363:(s,e,t)=>{t.d(e,{c4:()=>i,gP:()=>o,qI:()=>n,x2:()=>d});const a=t(3233).g.injectEndpoints({endpoints:s=>({getPasses:s.query({query:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return console.log("page",s),{url:"/passes/?limit=6&page=".concat(s)}},providesTags:["Passes"]}),getPassById:s.query({query:s=>({url:"/passes/".concat(s)}),providesTags:["Passes"],transformResponse:s=>(delete s.contactfound._id,delete s.contactfound.passNumber,delete s.contactfound.goods[0]._id,delete s.contactfound.__v,console.log("transform",s),s)}),newPass:s.mutation({query(s){const{...e}=s;return{url:"/passes/add",method:"POST",body:e}},invalidatesTags:["Passes"]}),updatePass:s.mutation({query:s=>{let{_id:e,data:t}=s;return{url:"/passes/".concat(e),method:"PUT",body:t}},invalidatesTags:["Passes"]})})}),{useGetPassesQuery:n,useNewPassMutation:i,useGetPassByIdQuery:o,useUpdatePassMutation:d}=a},8846:(s,e,t)=>{t.r(e),t.d(e,{default:()=>x});const a="passesPage_container__066C8";var n=t(4270),i=t(2791),o=t(5363);const d="PassesList_passesList__QvG5l",c="PassesList_passesItem__z2KQG",r="PassesList_passBtn__Ehkg5";var l=t(7689),u=t(7520),p=t(598),g=t(2100),_=t(9640),h=t(824),P=t(184);const j=()=>{const s=(0,l.s0)(),[e,t]=i.useState(1),{data:a,isLoading:n,isSuccess:j,isError:x,isFetching:m,error:y}=(0,o.qI)(e);let v="";return n?v=(0,P.jsx)("p",{children:"Loading..."}):x?v=(0,P.jsx)("div",{children:y.toString()}):j&&(v=a.results),(0,P.jsxs)("div",{children:[(0,P.jsxs)(p.U,{spacing:"14px",children:[(0,P.jsx)(g.z,{onClick:()=>t((s=>s-1)),isLoading:m,disabled:1===e,children:(0,P.jsx)(_.J,{as:u.KYK})}),(0,P.jsx)(g.z,{onClick:()=>t((s=>s+1)),isLoading:m,disabled:e===v.totalPages,children:(0,P.jsx)(_.J,{as:u.hdK})}),(0,P.jsx)(h.xu,{children:"".concat(e," / ").concat(v.totalPages)})]}),(0,P.jsx)("ul",{className:d,children:Array.isArray(v.docs)?v.docs.toReversed().map((e=>{let{_id:t,passNumber:a,personOnPassCompany:n,baseCreatingPass:i}=e;return(0,P.jsxs)("li",{className:c,children:[(0,P.jsxs)("p",{children:[a,", ",n,", ",i]}),(0,P.jsx)("button",{className:r,type:"button",onClick:()=>{console.log("clicked ",t),s("/editpass",{state:{_id:t}})},children:"Edit"}),(0,P.jsx)("button",{className:r,type:"button",onClick:()=>{console.log("clicked ",t),s("/printout",{state:{_id:t}})},children:"Print"})]},t)})):null})]})},x=()=>(0,P.jsxs)("div",{className:a,children:[(0,P.jsx)(n.q,{children:(0,P.jsx)("title",{children:"Passes list page"})}),(0,P.jsx)("div",{children:(0,P.jsx)(j,{})})]})}}]);
//# sourceMappingURL=846.9137812a.chunk.js.map