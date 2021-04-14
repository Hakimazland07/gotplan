(this["webpackJsonpgot-plan"]=this["webpackJsonpgot-plan"]||[]).push([[0],{172:function(e,t,n){},173:function(e,t,n){},179:function(e,t,n){},182:function(e,t,n){},195:function(e,t){},229:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a,c,s,r,i,l,o,j,b,d=n(1),u=n.n(d),m=n(34),O=n.n(m),h=(n(172),n(173),n(141)),x=n(142),f=n(163),p=n(161),N=n(21),g=n(28),v=Object(g.b)(),C=n(13),y=n(38),S=n(16),$=Object(S.gql)(a||(a=Object(y.a)(["\n  query {\n    getAllUser {\n      firstName\n      lastName\n      email\n      phoneNumber\n      gender\n      id\n    }\n  }\n"]))),U=Object(S.gql)(c||(c=Object(y.a)(["\n  query {\n    getGenders\n  }\n"]))),I=Object(S.gql)(s||(s=Object(y.a)(["\n  mutation createUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $gender: String!\n    $phoneNumber: String!\n  ) {\n    createUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      gender: $gender\n      phoneNumber: $phoneNumber\n    ) {\n      firstName\n      lastName\n      email\n      phoneNumber\n      gender\n    }\n  }\n"]))),k=Object(S.gql)(r||(r=Object(y.a)(["\n  mutation deleteUser($id: String!) {\n    deleteUser(id: $id) {\n      id\n    }\n  }\n"]))),G=Object(S.gql)(i||(i=Object(y.a)(["\n  mutation getUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      firstName\n      lastName\n      email\n      gender\n      phoneNumber\n    }\n  }\n"]))),w=Object(S.gql)(l||(l=Object(y.a)(["\n  mutation updateUser(\n    $id: String!\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $gender: String!\n    $phoneNumber: String!\n  ) {\n    updateUser(\n      id: $id\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      gender: $gender\n      phoneNumber: $phoneNumber\n    ) {\n      firstName\n      lastName\n      email\n      gender\n      phoneNumber\n    }\n  }\n"]))),L=Object(S.gql)(o||(o=Object(y.a)(["\n  mutation findUser($firstName: String) {\n    findUser(firstName: $firstName) {\n      id\n      firstName\n      lastName\n      email\n      gender\n      phoneNumber\n    }\n  }\n"]))),q=Object(S.gql)(j||(j=Object(y.a)(["\n  query pagination($first: Int, $offset: Int) {\n    pagination(first: $first, offset: $offset) {\n      users {\n        id\n        firstName\n        lastName\n        email\n        gender\n        phoneNumber\n      }\n      totalUsers\n    }\n  }\n"]))),A=Object(S.gql)(b||(b=Object(y.a)(["\n  mutation filterGender($gender: String) {\n    filterGender(gender: $gender) {\n      id\n      firstName\n      lastName\n      email\n      gender\n      phoneNumber\n    }\n  }\n"]))),B=n(254),M=n(164),E=n(255),F=n(56),z=n.p+"static/media/me-2.ba9a76d9.png",H=n.p+"static/media/contact.2234706f.svg",R=(n(179),n(247)),P=n(148),Q=n(5);function V(){var e=Object(d.useState)([]),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(d.useState)([]),s=Object(C.a)(c,2),r=s[0],i=s[1],l=Object(d.useState)(0),o=Object(C.a)(l,2),j=o[0],b=o[1],u=Object(S.useQuery)(q,{variables:{first:3,offset:j}}).data;Object(d.useEffect)((function(){u&&(a(u.pagination),i(u.pagination.users))}),[u]);var m=Object(Q.jsx)("div",{children:Object(Q.jsx)(B.a,{style:{height:"300px"},children:r.map((function(e){return Object(Q.jsxs)(M.a,{className:"listgroupitem",children:[Object(Q.jsx)("p",{className:"listitemtext-1",children:e.firstName+" "+e.lastName}),Object(Q.jsx)("p",{className:"listitemtext-2",children:e.phoneNumber})]},e.id)}))})});return Object(Q.jsxs)("div",{className:"home",children:[Object(Q.jsx)("div",{className:"header"}),Object(Q.jsxs)("div",{className:"body",children:[Object(Q.jsxs)("div",{className:"container-1",children:[Object(Q.jsx)("img",{className:"img-1",src:z}),Object(Q.jsxs)("div",{className:"group",children:[Object(Q.jsx)("p",{className:"smalltext-1",children:"Hello,"}),Object(Q.jsx)("p",{className:"title-1",children:"Hakim Mazlan"})]})]}),Object(Q.jsxs)(R.a,{children:[Object(Q.jsx)(P.a,{sm:12,children:Object(Q.jsxs)("div",{className:"card-1",children:[Object(Q.jsxs)("div",{className:"cardleft",children:[Object(Q.jsx)("p",{className:"cardtext-1",children:"Total Contact"}),Object(Q.jsx)("p",{className:"cardtext-2",children:n.totalUsers})]}),Object(Q.jsx)("div",{className:"cardright",children:Object(Q.jsx)("img",{className:"cardimg-1",src:H})})]})}),Object(Q.jsxs)(P.a,{sm:12,children:[Object(Q.jsx)("p",{className:"subtitle-1",children:"Latest Contact"}),m,Object(Q.jsxs)("div",{className:"pagination-btn",children:[Object(Q.jsx)(E.a,{className:"btn",onClick:function(){j-3>=0&&b(j-3)},children:Object(Q.jsx)(F.a,{})}),Object(Q.jsx)(E.a,{className:"btn",onClick:function(){j+3<n.totalUsers&&b(j+3)},children:Object(Q.jsx)(F.b,{})})]})]})]})]})]})}var D=n(113),J=n.n(D),T=n(149),K=(n(182),n(253)),W=n(92),X=n(115),Y=n(71),Z=n(153),_=n.n(Z);function ee(){var e=Object(d.useState)([]),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(d.useState)(!1),s=Object(C.a)(c,2),r=s[0],i=s[1],l=Object(d.useState)(!1),o=Object(C.a)(l,2),j=o[0],b=o[1],u=Object(d.useState)(""),m=Object(C.a)(u,2),O=m[0],h=m[1],x=Object(d.useState)(""),f=Object(C.a)(x,2),p=f[0],N=f[1],g=Object(d.useState)([]),v=Object(C.a)(g,2),y=v[0],I=v[1],q=Object(d.useState)(0),F=Object(C.a)(q,2),z=F[0],H=F[1],R=Object(d.useState)(""),P=Object(C.a)(R,2),V=P[0],D=P[1],Z=Object(d.useState)(""),ee=Object(C.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(d.useState)(""),ce=Object(C.a)(ae,2),se=ce[0],re=ce[1],ie=Object(d.useState)(""),le=Object(C.a)(ie,2),oe=le[0],je=le[1],be=Object(d.useState)(""),de=Object(C.a)(be,2),ue=de[0],me=de[1],Oe=Object(S.useQuery)($).data,he=Object(S.useMutation)(k),xe=Object(C.a)(he,1)[0],fe=Object(S.useMutation)(w),pe=Object(C.a)(fe,1)[0],Ne=Object(S.useMutation)(G),ge=Object(C.a)(Ne,1)[0],ve=Object(S.useMutation)(L),Ce=Object(C.a)(ve,1)[0],ye=Object(S.useQuery)(U).data,Se=Object(S.useMutation)(A),$e=Object(C.a)(Se,1)[0];function Ue(){i(!1===r),H(0),D(""),ne(""),re("")}function Ie(){b(!1===j)}function ke(e){N(e),console.log(e),e?Ce({variables:{firstName:e}}).then(function(){var e=Object(T.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data;case 2:n=e.sent,console.log(n),a(n.findUser);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):(a(Oe.getAllUser),console.log("get all"))}Object(d.useEffect)((function(){Oe&&ye&&(a(Oe.getAllUser),I(ye.getGenders))}),[Oe,ye]);var Ge=Object(Q.jsxs)("div",{children:[Object(Q.jsx)("p",{className:"subtitle",children:"Contact Detail"}),Object(Q.jsxs)(K.a.Group,{controlId:"fistName",children:[Object(Q.jsx)(K.a.Label,{children:"First Name"}),Object(Q.jsx)(K.a.Control,{type:"text",placeholder:"Contact First Name",onChange:function(e){!function(e){D(V=e.target.value)}(e)},defaultValue:V})]}),Object(Q.jsxs)(K.a.Group,{controlId:"lastName",children:[Object(Q.jsx)(K.a.Label,{children:"Last Name"}),Object(Q.jsx)(K.a.Control,{type:"text",placeholder:"Contact Last Name",onChange:function(e){!function(e){ne(te=e.target.value)}(e)},defaultValue:te})]}),Object(Q.jsxs)(K.a.Group,{controlId:"email",children:[Object(Q.jsx)(K.a.Label,{children:"Email"}),Object(Q.jsx)(K.a.Control,{type:"text",placeholder:"Email",onChange:function(e){!function(e){re(se=e.target.value)}(e)},defaultValue:se})]}),Object(Q.jsxs)(K.a.Group,{controlId:"gender",children:[Object(Q.jsx)(K.a.Label,{children:"Gender"}),Object(Q.jsxs)(K.a.Control,{as:"select",placeholder:"Gender",onChange:function(e){!function(e){je(oe=e.target.value)}(e)},defaultValue:oe,children:[Object(Q.jsx)("option",{value:"Male",children:"Male"}),Object(Q.jsx)("option",{value:"Female",children:"Female"})]})]}),Object(Q.jsxs)(K.a.Group,{controlId:"phone",children:[Object(Q.jsx)(K.a.Label,{children:"Phone Number"}),Object(Q.jsx)(K.a.Control,{type:"text",placeholder:"Phone Number",onChange:function(e){!function(e){me(ue=e.target.value)}(e)},defaultValue:ue})]}),Object(Q.jsx)(E.a,{className:"updateBtn",onClick:function(){return function(e){pe({variables:{id:e,firstName:V,lastName:te,email:se,gender:oe,phoneNumber:ue}}).then((function(e){Ue(),a(Oe.getAllUser)})),window.location.reload(!1)}(z)},children:Object(Q.jsx)(X.b,{style:{marginBottom:"4px"}})}),Object(Q.jsx)(E.a,{className:"deleteBtn",onClick:function(){return function(e){xe({variables:{id:e}}).then((function(e){Ue(),a(Oe.getAllUser)})),window.location.reload(!1)}(z)},children:Object(Q.jsx)(X.a,{style:{marginBottom:"4px"}})})]}),we=Object(Q.jsxs)("div",{children:[Object(Q.jsx)("p",{className:"subtitle",children:"Filter Mode"}),Object(Q.jsx)(K.a.Check,{type:"radio",className:"radio-btn",label:"All",name:"formHorizontalRadios",id:"formHorizontalRadios",onClick:function(){return h("All")}},0),y.map((function(e,t){return Object(Q.jsx)(K.a.Check,{type:"radio",className:"radio-btn",label:e,name:"formHorizontalRadios",id:"formHorizontalRadios"+t+1,onClick:function(){return h(e)}},t)})),Object(Q.jsx)(E.a,{className:"apply-btn",onClick:function(){"All"!=O?$e({variables:{gender:O}}).then((function(e){a(e.data.filterGender)})):a(Oe.getAllUser),b(!1)},children:"Apply"})]});return Object(Q.jsx)("div",{className:"list",children:Object(Q.jsxs)("div",{className:"body",children:[Object(Q.jsx)(_.a,{className:"searchbarCustom",value:p,onChange:function(e){return ke(e)},onCancelSearch:function(){return ke("")}}),Object(Q.jsxs)("div",{className:"filter",children:[Object(Q.jsx)("p",{onClick:Ie,className:"filtertext",children:"Filter"}),Object(Q.jsx)(W.b,{size:16})]}),Object(Q.jsx)(B.a,{children:n.map((function(e){return Object(Q.jsxs)(M.a,{onClick:function(){return function(e){Ue(),ge({variables:{id:e}}).then((function(t){if(t.data){var n=t.data;H(e=n.getUserById.id),D(V=n.getUserById.firstName),ne(te=n.getUserById.lastName),re(se=n.getUserById.email),je(oe=n.getUserById.gender),me(ue=n.getUserById.phoneNumber)}})).catch((function(e){console.log(e)}))}(e.id)},children:[Object(Q.jsx)("p",{className:"item-p",children:e.firstName+" "+e.lastName}),Object(Q.jsx)("p",{className:"item-p",children:e.email})]},e.id)}))}),Object(Q.jsx)(Y.a,{open:r,onRequestClose:Ue,modalElementClass:"detailDrawer",children:Ge}),Object(Q.jsx)(Y.a,{open:j,onRequestClose:Ie,modalElementClass:"detailDrawer",children:we})]})})}var te=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(Q.jsx)(N.b,{history:v,children:Object(Q.jsxs)(N.c,{children:[Object(Q.jsx)(N.a,{path:"/",exact:!0,component:V}),Object(Q.jsx)(N.a,{path:"/list",exact:!0,component:ee})]})})}}]),n}(d.Component),ne=n(112),ae=n(157),ce=(n(228),n(229),n(252)),se=n(250),re=n(251),ie=n(160);function le(){var e=Object(d.useState)(!1),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(d.useState)(""),s=Object(C.a)(c,2),r=s[0],i=s[1],l=Object(d.useState)(""),o=Object(C.a)(l,2),j=o[0],b=o[1],u=Object(d.useState)(""),m=Object(C.a)(u,2),O=m[0],h=m[1],x=Object(d.useState)(""),f=Object(C.a)(x,2),p=f[0],N=f[1],g=Object(d.useState)(""),y=Object(C.a)(g,2),$=y[0],U=y[1],k=Object(d.useState)("home"),G=Object(C.a)(k,2),w=G[0],L=G[1],q=Object(S.useMutation)(I),A=Object(C.a)(q,1)[0];function B(){a(!1===n)}var M=Object(Q.jsxs)("div",{children:[Object(Q.jsx)("p",{className:"subtitle",children:"Add New Contact"}),Object(Q.jsxs)(K.a,{onSubmit:function(){A({variables:{firstName:r,lastName:j,email:O,gender:p,phoneNumber:$}}).then((function(e){window.location.reload(!1)})),i(""),b(""),h(""),N(""),U(""),a(!1)},children:[Object(Q.jsxs)(K.a.Group,{controlId:"fistName",children:[Object(Q.jsx)(K.a.Label,{children:"First Name"}),Object(Q.jsx)(K.a.Control,{type:"text",placeholder:"Contact First Name",onChange:function(e){i(e.target.value)},value:r})]}),Object(Q.jsxs)(K.a.Group,{controlId:"lastName",children:[Object(Q.jsx)(K.a.Label,{children:"Last Name"}),Object(Q.jsx)(K.a.Control,{type:"text",placeholder:"Contact Last Name",onChange:function(e){b(e.target.value)},value:j})]}),Object(Q.jsxs)(K.a.Group,{controlId:"email",children:[Object(Q.jsx)(K.a.Label,{children:"Email"}),Object(Q.jsx)(K.a.Control,{type:"text",placeholder:"Email",onChange:function(e){h(e.target.value)},value:O})]}),Object(Q.jsxs)(K.a.Group,{controlId:"gender",children:[Object(Q.jsx)(K.a.Label,{children:"Gender"}),Object(Q.jsxs)(K.a.Control,{as:"select",placeholder:"Gender",onChange:function(e){N(e.target.value),console.log(e.target.value)},value:p,children:[Object(Q.jsx)("option",{value:"Male",children:"Male"}),Object(Q.jsx)("option",{value:"Female",children:"Female"})]})]}),Object(Q.jsxs)(K.a.Group,{controlId:"phone",children:[Object(Q.jsx)(K.a.Label,{children:"Phone Number"}),Object(Q.jsx)(K.a.Control,{type:"text",placeholder:"Phone Number",onChange:function(e){U(e.target.value)},value:$})]}),Object(Q.jsx)(E.a,{className:"btn-submit",variant:"primary",type:"submit",children:Object(Q.jsx)(W.a,{style:{marginBottom:"2px"}})})]})]});return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(ce.a,{expand:"lg",variant:"light",bg:"light",fixed:"bottom",children:Object(Q.jsx)(se.a,{children:Object(Q.jsxs)(R.a,{children:[Object(Q.jsx)(P.a,{className:"text-center",children:Object(Q.jsx)(F.c,{className:"home"===w?"activeNav":"",size:25,onClick:function(){L("home"),v.push("/")}})}),Object(Q.jsx)(P.a,{className:"text-center",children:Object(Q.jsx)(F.d,{className:"list"===w?"activeNav":"",size:25,onClick:function(){L("list"),v.push("/list")}})})]})})}),Object(Q.jsx)(re.a,{className:"fabStyles",color:"primary",onClick:B,children:Object(Q.jsx)(ie.a,{size:20})}),Object(Q.jsx)(Y.a,{open:n,onRequestClose:B,modalElementClass:"addDrawer",children:M})]})}var oe=Object(ae.a)((function(e){var t=e.graphQLErrors;t&&t.map((function(e){var t=e.message;return alert("GraphQL error ".concat(t))}))})),je=Object(S.from)([oe,new S.HttpLink({uri:"http://192.168.8.103:7000/myapi"})]),be=new S.ApolloClient({cache:new S.InMemoryCache,link:je});var de=function(){return Object(Q.jsx)(S.ApolloProvider,{client:be,children:Object(Q.jsx)(ne.a,{children:Object(Q.jsxs)("div",{className:"App",children:[Object(Q.jsx)(te,{}),Object(Q.jsx)(le,{})]})})})},ue=function(){O.a.render(Object(Q.jsx)(u.a.StrictMode,{children:Object(Q.jsx)(de,{})}),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",ue,!1):ue()}},[[231,1,2]]]);
//# sourceMappingURL=main.5e2ced11.chunk.js.map