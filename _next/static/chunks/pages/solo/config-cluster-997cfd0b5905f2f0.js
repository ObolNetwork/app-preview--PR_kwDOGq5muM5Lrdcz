(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{24943:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solo/config-cluster",function(){return n(68048)}])},68048:function(e,s,n){"use strict";n.r(s);var r=n(85893),i=n(71553),t=n(67294),c=n(87536),o=n(93445),l=n(16960),a=n(72534),d=n(37274),u=n(11163),x=n(48847);function h(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function m(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(s){h(e,s,n[s])}))}return e}var f=function(){var e=(0,d.o)((function(e){return e.clusterDefinition})),s=(0,c.cI)({mode:"onChange",defaultValues:{singleAddress:"",feeRecipientAddress:"",name:""}}),n=s.control,h=s.register,f=s.handleSubmit,p=s.formState,v=p.isDirty,j=p.isValid,g=s.setValue,b=(s.getValues,s.trigger),C=(0,u.useRouter)(),y=(0,d.o)((function(e){return e.completeSoloStep})),k=(0,d.o)((function(e){return e.enableSoloStep})),w=(0,d.o)((function(e){return e.updateClusterDefinition})),$=(0,a.kR)().account,S=((0,a.pZ)($),(0,t.useState)((null===e||void 0===e?void 0:e.clusterSize)||4)),A=S[0],N=S[1],T=(0,a.D9)(A),E=(0,t.useState)((null===e||void 0===e?void 0:e.validatorsSize)||1),z=E[0],R=E[1],V=(0,t.useState)(),_=V[0],O=V[1],D=(0,t.useState)(),I=D[0],P=D[1];return(0,t.useEffect)((function(){z&&O(32*z)}),[z]),(0,t.useEffect)((function(){if(A){var e=(0,x.zT)(A);P(e)}}),[T,A]),(0,t.useEffect)((function(){g("singleAddress",null===e||void 0===e?void 0:e.singleAddress),g("feeRecipientAddress",null===e||void 0===e?void 0:e.feeRecipientAddress),(null===e||void 0===e?void 0:e.name)&&g("name",null===e||void 0===e?void 0:e.name,{shouldDirty:!0,shouldValidate:!0})}),[]),(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,r.jsx)(i.xv,{variant:"h3",children:"Configure Cluster"}),(0,r.jsx)(o.l0,{onSubmit:f((function(e){y("config-cluster"),w(m({},e,{creator:{address:$},validatorsEthAmount:_,operators:new Array(A).fill({address:""}),validators:new Array(z).fill({feeRecipientAddress:e.feeRecipientAddress,withdrawalAddress:e.singleAddress}),nonOperatorFlag:!0}));var s=k("confirm-configuration");C.push(s.href)})),children:(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,r.jsx)(i.W2,{className:"cluster-details",alignItems:"start",children:(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,r.jsx)(i.xv,{variant:"h4",children:"Cluster Details"}),(0,r.jsxs)(o.kC,{direction:"column",className:"cluster-name-section",css:{gap:"$sm"},children:[(0,r.jsx)(i.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"Cluster Name"}),(0,r.jsx)(i.xv,{variant:"metadata",color:"muted",children:"Used to identify your group during configuration process"}),(0,r.jsx)(i.nv,m({},h("name",{required:!0}),{placeholder:"Super Validators",defaultValue:null===e||void 0===e?void 0:e.name}))]}),(0,r.jsxs)(o.kC,{direction:{"@sm":"column"},className:"cluster-size-section",css:{gap:"$3xl"},children:[(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$sm",width:"auto"},children:[(0,r.jsxs)(o.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,r.jsx)(i.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"Cluster Size"}),(0,r.jsx)(i.KZ,{content:"Cluster Size: The number of operators in the cluster. The minimum is 4, for now the maximum is capped at 10.",children:(0,r.jsx)(i.xu,{css:{display:"flex"},children:(0,r.jsx)(i.by,{})})})]}),(0,r.jsx)(l.fx,{name:"clusterSize",value:A,control:n,onChangeValue:function(e){return N(e)},min:4})]}),(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$sm",width:"auto"},children:[(0,r.jsxs)(o.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,r.jsx)(i.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"Threshold"}),(0,r.jsx)(i.KZ,{content:"Threshold: The number of nodes that need to be functioning for the validator to stay active.",children:(0,r.jsx)(i.xu,{css:{display:"flex"},children:(0,r.jsx)(i.by,{})})})]}),(0,r.jsx)(o.kC,{css:{height:"100%",alignItems:"center"},children:(0,r.jsx)(i.xv,{variant:"h5",css:{color:"$body"},children:"".concat(I,"/").concat(A)})})]})]}),(0,r.jsxs)(o.kC,{direction:"column",className:"operator-address-section",css:{gap:"$sm"},children:[(0,r.jsx)(i.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"Cluster Created By"}),(0,r.jsx)(i.xv,{color:"obolGreen",children:$})]})]})}),(0,r.jsxs)(i.W2,{className:"validators-section",alignItems:"start",children:[(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$xxxs"},children:[(0,r.jsx)(i.xv,{variant:"h4",children:"Validators"}),(0,r.jsx)(i.xv,{size:"4",color:"muted",children:"Select how many Ethereum validators you want to run."})]}),(0,r.jsxs)(o.kC,{direction:{"@sm":"column"},css:{gap:"$xl",width:"auto"},children:[(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$xs"},children:[(0,r.jsx)(i.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"Validators"}),(0,r.jsx)(l.fx,{value:z,onChangeValue:function(e){R(Number(e))},name:"validatorsSize",control:n,min:1,max:250})]}),(0,r.jsxs)(o.kC,{direction:"column",css:{gap:"$xs"},children:[(0,r.jsx)(i.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"Cost"}),(0,r.jsxs)(o.kC,{css:{gap:"$xxs",height:"100%",alignItems:"center"},children:[(0,r.jsx)(i.Ee,{src:"/assets/eth-icon.svg",alt:"eth",width:24,height:24}),(0,r.jsxs)(i.xv,{css:{textTransform:"uppercase"},variant:"h5",children:[_," Eth"]})]})]})]})]}),(0,r.jsxs)(i.W2,{className:"withdrawal-section",css:{gap:"$xl"},alignItems:"start",children:[(0,r.jsx)(i.xv,{variant:"h4",children:"Withdrawal Address"}),(0,r.jsxs)(o.kC,{direction:"column",className:"single-address-section",css:{gap:"$sm"},children:[(0,r.jsxs)(o.kC,{css:{justifyContent:"space-between"},children:[(0,r.jsx)(i.xv,{color:"body",variant:"body",children:"Address to receive validator principal and rewards at exit"}),(0,r.jsx)(i.zx,{ghost:!0,css:{color:"$obolGreen",fontSize:"$1",p:0,height:"$full",minWidth:"90px"},onClick:function(e){e.preventDefault(),g("singleAddress",$),b("singleAddress")},children:"Use my address"})]}),(0,r.jsx)(o.o3,{children:(0,r.jsx)(l.bQ,{control:n,name:"singleAddress"})})]})]}),(0,r.jsxs)(i.W2,{className:"fee-recipient-section",css:{gap:"$xl"},alignItems:"start",children:[(0,r.jsx)(i.xv,{variant:"h4",children:"Fee Recipient"}),(0,r.jsxs)(o.kC,{direction:"column",className:"fee-recipient-address-section",css:{gap:"$sm"},children:[(0,r.jsxs)(o.kC,{css:{justifyContent:"space-between"},children:[(0,r.jsx)(i.xv,{color:"body",variant:"body",children:"Enter the Fee Recipient Address to receive MEV rewards (if enabled), and block proposal priority fees."}),(0,r.jsx)(i.zx,{ghost:!0,css:{color:"$obolGreen",fontSize:"$1",p:0,height:"$full",minWidth:"90px"},onClick:function(e){e.preventDefault(),g("feeRecipientAddress",$),b("feeRecipientAddress")},children:"Use my address"})]}),(0,r.jsx)(o.o3,{children:(0,r.jsx)(l.bQ,{control:n,name:"feeRecipientAddress"})})]})]}),(0,r.jsx)(o.kC,{direction:"column",children:(0,r.jsx)(i.zx,{color:"primary",type:"submit",disabled:!$||!j||!v,children:"Create Cluster Configuration"})})]})})]})};s.default=f,f.layout="SoloProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],(function(){return s=24943,e(e.s=s);var s}));var s=e.O();_N_E=s}]);