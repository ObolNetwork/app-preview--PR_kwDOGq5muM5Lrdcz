(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{17740:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirm-configuration",function(){return r(80062)}])},24585:function(e,n,r){"use strict";r.d(n,{I:function(){return o}});var t=r(85893),s=r(71553),a=r(84373),i=r(64240),o=function(e){var n=e.recipients,r=(0,a.Z)(n.map((function(e){return e.address})));return(0,t.jsx)(s.iA,{columns:[{accessorKey:"operator",header:"Operator Address"},{accessorKey:"split",header:"Split",css:{width:"70px"}}],rows:n.map((function(e,n){return{operator:(0,t.jsx)(i.M,{ensName:r[n],address:e.address}),split:"".concat(e.split||e.percentAllocation," %")}}))})}},80062:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return P}});var t=r(34051),s=r.n(t),a=r(85893),i=r(93445),o=r(64146),c=r(4010),l=r(71553),u=r(8687),d=r(43080),h=r(37274),p=r(87536),f=r(72534),v=r(48847),x=r(2983),g=r(11163),m=r(67294),j=r(24585),y=r(25089),b=r(61744),w=r(19485),k=r(9279),C=r(72002);function S(e,n,r,t,s,a,i){try{var o=e[a](i),c=o.value}catch(l){return void r(l)}o.done?n(c):Promise.resolve(c).then(t,s)}function $(e){return function(){var n=this,r=arguments;return new Promise((function(t,s){var a=e.apply(n,r);function i(e){S(a,t,s,i,o,"next",e)}function o(e){S(a,t,s,i,o,"throw",e)}i(void 0)}))}}function A(e,n,r){return _.apply(this,arguments)}function _(){return(_=$(s().mark((function e(n,r,t){var a,i,c,l,u,h,p,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new o.Contract(d.f3,C.Mt,r),i=[b.parseEther("32")],e.prev=2,u=[n,t],e.next=7,a.createWaterfallModule(k.d,k.d,u,i);case 7:return h=e.sent,e.next=10,h.wait();case 10:return p=e.sent,f=w.getAddress(null===(c=p.events[0])||void 0===c||null===(l=c.args)||void 0===l?void 0:l.waterfallModule),e.abrupt("return",f);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0,"waterfall deployment error");case 18:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}function O(e,n,r){return E.apply(this,arguments)}function E(){return(E=$(s().mark((function e(n,r,t){var a,i,o,c,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0,k.d,e.prev=2,e.next=6,t.createSplit(n,r,0,k.d);case 6:return o=e.sent,e.next=9,o.wait();case 9:return c=e.sent,l=w.getAddress(null===(a=c.events[0])||void 0===a||null===(i=a.args)||void 0===i?void 0:i.split),e.abrupt("return",l);case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0,"splitter deployment error");case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function T(e,n,r,t,s,a,i){try{var o=e[a](i),c=o.value}catch(l){return void r(l)}o.done?n(c):Promise.resolve(c).then(t,s)}function I(e){return function(){var n=this,r=arguments;return new Promise((function(t,s){var a=e.apply(n,r);function i(e){T(a,t,s,i,o,"next",e)}function o(e){T(a,t,s,i,o,"throw",e)}i(void 0)}))}}function M(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function R(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){M(e,n,r[n])}))}return e}function z(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return N(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=(0,l.zo)(l.zx,{"& div":{m:0},width:"100%"}),W=function(){var e=(0,f.kR)(),n=e.account,r=e.provider,t=e.chainId,b=(0,p.cI)({mode:"onChange"}).handleSubmit,w=(0,g.useRouter)(),k=(0,m.useState)(),C=k[0],S=k[1],$=(0,m.useState)(),_=$[0],E=$[1],N=(0,m.useState)(!1),T=N[0],M=N[1],W=(0,m.useState)(),P=W[0],D=W[1],H=(0,m.useState)(),L=H[0],K=H[1],Y=(0,m.useState)(),Z=Y[0],q=Y[1],G=(0,m.useState)(),Q=G[0],V=G[1],B=(0,m.useState)(!1),U=B[0],X=B[1],J=(0,m.useState)(""),ee=J[0],ne=J[1],re=(0,m.useState)(""),te=re[0],se=re[1],ae=(0,m.useState)(null),ie=ae[0],oe=ae[1],ce=(0,m.useState)("Deploy Withdrawal Manager 1/2"),le=ce[0],ue=ce[1],de=(0,m.useState)(!1),he=de[0],pe=de[1],fe=(0,m.useState)(""),ve=fe[0],xe=fe[1],ge=(0,h.o)((function(e){return e.clusterDefinition})),me=(0,h.o)((function(e){return e.updateClusterDefinition})),je=(0,h.o)((function(e){return e.completeLeaderStep})),ye=(0,h.o)((function(e){return e.enableLeaderStep})),be=((0,h.o)((function(e){return e.getStepByRoute(w.pathname)})),function(e){console.log(e),S(null),E(null),D(null),K(null),q(null),M(!1)});if((0,m.useEffect)((function(){r&&oe(new o.Contract(d.tm,c.Mt,null===r||void 0===r?void 0:r.getSigner(0)))}),[r]),(0,m.useEffect)((function(){if(C){var e=function(){var e=I(s().mark((function e(){var a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={creator_config_hash:C.config_hash},e.next=3,(0,v.L6)(r,t,n,a);case 3:i=e.sent,V(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(e(),!(null===ge||void 0===ge?void 0:ge.nonOperatorFlag)){var a=function(){var e=I(s().mark((function e(){var a,i,o,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={operator_config_hash:C.config_hash},e.next=4,(0,v.AM)(r,t,n,a);case 4:return i=e.sent,q(i),o={enr:null===ge||void 0===ge?void 0:ge.enr},e.next=9,(0,v.Ol)(r,t,n,o);case 9:c=e.sent,K(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),be(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();a().catch(be)}}}),[C]),(0,m.useEffect)((function(){if(Q&&C){var e=function(){var e=I(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.c0)({token:Q,data:C});case 2:if((n=e.sent).data.config_hash){e.next=5;break}throw"no config hash returned";case 5:D(n.data.config_hash);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch(be)}}),[Q,C]),(0,m.useEffect)((function(){if(!(null===ge||void 0===ge?void 0:ge.nonOperatorFlag)&&L&&Z&&P){var e=function(){var e=I(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={address:n,enr:null===ge||void 0===ge?void 0:ge.enr,enr_signature:L,fork_version:d.se,version:d.q4.STABLE},e.next=3,(0,x.R)({token:Z,data:r,configHash:P});case 3:t=e.sent.data,E(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch(be)}}),[L,P]),(0,m.useEffect)((function(){if(!(null===ge||void 0===ge?void 0:ge.nonOperatorFlag)&&_&&P||(null===ge||void 0===ge?void 0:ge.nonOperatorFlag)&&P){je("confirm-configuration");var e=ye("invite-group");M(!1),w.push({pathname:e.href,query:{configHash:P}})}}),[_,P]),!ge)return(0,a.jsx)(l.xv,{children:"No cluster data ..."});var we=function(){var e=I(s().mark((function e(){var n,a,i,o,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xe(""),0,(n=z(ge.recipients)).sort((function(e,n){return e.address.localeCompare(n.address)})),a=n.map((function(e){return e.address})),i=n.map((function(e){return 1e4*parseFloat(e.split)})),e.next=8,ie.predictImmutableSplitAddress(a,i,0);case 8:return o=e.sent,console.log("predictedSplitAddress",o),e.next=12,(0,x.er)({chainId:t,splitId:o});case 12:if(!e.sent){e.next=16;break}return xe("Reward Splitter with the same parameters are already deployed, go back to 'Configure Cluster' step and change the reward split parameters."),e.abrupt("return");case 16:return e.next=18,A(ge.principal,r.getSigner(0),o);case 18:c=e.sent,console.log(c,"waterFallModuleAddress"),c&&(ne(c),ue("Deploy Splitter Contract 2/2"));case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=I(s().mark((function e(){var n,r,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=z(ge.recipients)).sort((function(e,n){return e.address.localeCompare(n.address)})),r=n.map((function(e){return e.address})),t=n.map((function(e){return 1e4*parseFloat(e.split)})),e.next=6,O(r,t,ie);case 6:a=e.sent,me(R({},ge,{singleAddress:a,feeRecipientAddress:a})),console.log("splitterContract",a),ee&&a&&(se(a),ue("Contracts Deployed Successfully"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(){var e=I(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!U){e.next=3;break}return e.abrupt("return");case 3:if(e.prev=3,ee){e.next=10;break}return X(!0),e.next=8,we();case 8:e.next=14;break;case 10:if(te||!ee){e.next=14;break}return X(!0),e.next=14,ke();case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0,"errr"),X(!1);case 20:X(!1);case 21:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}(),Se=function(){var e=I(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,v.KH)(ge,d.q4.STABLE,n),S(r),M(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$e=(0,v.zT)(null===ge||void 0===ge?void 0:ge.clusterSize),Ae=function(){return(0,a.jsx)(l.W2,{className:"cluster-details",alignItems:"start",children:(0,a.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,a.jsx)(l.xv,{variant:"h4",children:"Cluster Details"}),(0,a.jsxs)(i.kC,{direction:"column",className:"cluster-name-section",css:{gap:"$sm"},children:[(0,a.jsx)(l.xv,{color:"body",variant:"body",children:"These are the group details that you need to review and accept to continue. "}),(0,a.jsx)(l.xv,{color:"body",variant:"body",children:"The status of each participant will update once they have signed and confirmed the configuration."}),(0,a.jsxs)(i.kC,{css:{gap:"$2xl"},children:[(0,a.jsx)(u.Mz,{heading:"Cluster Name",subHeading:null===ge||void 0===ge?void 0:ge.name}),(0,a.jsx)(u.Mz,{heading:"Group Size",subHeading:null===ge||void 0===ge?void 0:ge.clusterSize.toString(),tooltipContent:"Group Size: The number of operators in the cluster. The minimum is 4, for now the maximum is capped at 10."}),(0,a.jsx)(u.Mz,{heading:"Threshold",subHeading:"".concat($e,"/").concat(null===ge||void 0===ge?void 0:ge.clusterSize),tooltipContent:"Threshold: The number of nodes that need to be functioning for the validator to stay active."})]}),(0,a.jsx)(i.VL,{operators:(null===ge||void 0===ge?void 0:ge.nonOperatorFlag)?z(null===ge||void 0===ge?void 0:ge.operators):[{address:n}].concat(z(null===ge||void 0===ge?void 0:ge.operators)),currentAccount:n})]})]})})},_e=function(){return(0,a.jsxs)(l.W2,{className:"validators-section",alignItems:"start",children:[(0,a.jsx)(i.kC,{direction:"column",css:{gap:"$xxxs"},children:(0,a.jsx)(l.xv,{variant:"h4",children:"Validators"})}),(0,a.jsxs)(i.kC,{direction:{"@sm":"column"},css:{gap:"$xl",width:"auto"},children:[(0,a.jsx)(u.Mz,{heading:"Validators",subHeading:null===ge||void 0===ge?void 0:ge.validatorsSize.toString()}),(0,a.jsxs)(i.kC,{direction:"column",css:{gap:"$xs"},children:[(0,a.jsx)(l.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"Cost"}),(0,a.jsxs)(i.kC,{css:{gap:"$xxs",height:"100%",alignItems:"center"},children:[(0,a.jsx)(l.Ee,{src:"/assets/eth-icon.svg",alt:"eth",width:24,height:24}),(0,a.jsxs)(l.xv,{css:{textTransform:"uppercase"},variant:"h5",children:[null===ge||void 0===ge?void 0:ge.validatorsEthAmount," Eth"]})]})]})]})]})},Oe=function(){return(0,a.jsxs)(l.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,a.jsxs)(i.kC,{direction:"column",css:{gap:"$sm"},children:[(0,a.jsxs)(i.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,a.jsx)(l.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"Your Charon client ENR"}),(0,a.jsx)(l.KZ,{content:'An ENR is an "Ethereum Node Record", and is used to identify your client to the other clients in the cluster."',children:(0,a.jsx)(l.xu,{css:{display:"flex"},children:(0,a.jsx)(l.by,{})})})]}),(0,a.jsx)(i.Kx,{css:{minHeight:"115px"},placeholder:"Your enr",value:null===ge||void 0===ge?void 0:ge.enr,readOnly:!0})]}),(0,a.jsxs)(l.rU,{href:"https://docs.obol.tech/docs/next/int/faq/errors#enrs-keys",target:"_blank",children:["More on Ethereum Node Records ",(0,a.jsx)(l.ZJ,{})]})]})};return(0,a.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,a.jsx)(l.xv,{variant:"h3",children:"Confirm Configuration"}),(0,a.jsxs)(i.l0,{onSubmit:b(Se),children:[(0,a.jsx)(y.T,{name:"reward_split_withdrawal_flow",children:(null===ge||void 0===ge?void 0:ge.principal)&&(0,a.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,a.jsx)(Ae,{}),(0,a.jsx)(_e,{}),!(null===ge||void 0===ge?void 0:ge.nonOperatorFlag)&&(0,a.jsx)(Oe,{}),(0,a.jsxs)(l.W2,{className:"withdrawal-section",css:{gap:"$xl"},alignItems:"start",children:[(0,a.jsx)(l.xv,{variant:"h4",children:"Split Addresses"}),(0,a.jsx)(j.I,{recipients:ge.recipients}),ee&&(0,a.jsxs)(l.W2,{className:"enr-section",alignItems:"start",css:{gap:"$sm",backgroundColor:"$bg03",p:"$sm",borderRadius:"$1"},children:[(0,a.jsxs)(i.kC,{css:{backgroundColor:"$bg03",borderRadius:"$1",gap:"$xs",p:"$sm",boxSizing:"border-box",width:"$full"},children:[(0,a.jsx)(l.xu,{children:(0,a.jsx)(l.nQ,{})}),(0,a.jsx)(l.xv,{variant:"body",css:{fontWeight:"$bold",color:"$light"},children:"Withdrawal Manager Successfully Deployed"})]}),(0,a.jsx)(l.xv,{color:"body",variant:"subline",css:{lineHeight:"$lg",textTransform:"uppercase",letterSpacing:"1px"},children:"Manager Address"}),(0,a.jsx)(l.IK,{readOnly:!0,value:ee}),(0,a.jsxs)(l.rU,{href:"https://goerli.etherscan.io/address/".concat(ee,"#code"),target:"_blank",children:["View Withdrawal Manager Transaction",(0,a.jsx)(l.ZJ,{})]})]}),(0,a.jsx)(F,{color:"primary",type:"button",onClick:Ce,disabled:"Contracts Deployed Successfully"==le||ve.length>0,children:(0,a.jsxs)(a.Fragment,{children:[U&&(0,a.jsx)(l.yC,{}),le]})}),ve&&(0,a.jsx)(l.xv,{variant:"metadata",color:"test",children:ve})]}),(0,a.jsx)(i.kC,{direction:"column",children:(0,a.jsxs)(l.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,a.jsx)(i.kC,{direction:"column",css:{gap:"$xs"},children:(0,a.jsx)(l.xv,{variant:"h4",children:"Confirm Details "})}),ee?(0,a.jsxs)(i.kC,{direction:"column",css:{gap:"$xl"},children:[(0,a.jsxs)(i.kC,{css:{gap:"$xs",width:"$full"},children:[(0,a.jsx)(l.xu,{children:(0,a.jsx)(l.XZ,{checked:he,onCheckedChange:function(){return pe(!he)}})}),(0,a.jsx)(l.xv,{variant:"body",children:"You will be prompted to sign a message with your wallet. This signature is attesting to the fact that:"})]}),(0,a.jsx)(l.sQ,{heading:"You have confirmed the withdrawal address for the validators to be created is correct. If this address is a contract, you have confirmed the contract implementation is correct. If this address is an externally-owned account, you have confirmed that the EOA custody is secure."}),(0,a.jsx)(l.sQ,{heading:"You have submitted your charon node's Ethereum Node Record (ENR) correctly. This signature is the authorisation of this charon client to act on your behalf."})]}):(0,a.jsx)(i.kC,{direction:"column",css:{gap:"$xl"},children:(0,a.jsx)(l.sQ,{heading:"You must deploy the Withdrawal Manager before continuing."})}),(0,a.jsx)(F,{color:"primary",type:"submit",disabled:!ee||!te||!he,children:(0,a.jsxs)(a.Fragment,{children:[T&&(0,a.jsx)(l.yC,{}),"Confirm and Sign"]})})]})})]})}),!(null===ge||void 0===ge?void 0:ge.principal)&&(null===ge||void 0===ge?void 0:ge.singleAddress)&&(0,a.jsx)(y.T,{name:"single_withdrawal_address_flow",children:(0,a.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,a.jsx)(Ae,{}),(0,a.jsx)(_e,{}),!(null===ge||void 0===ge?void 0:ge.nonOperatorFlag)&&(0,a.jsx)(Oe,{}),(0,a.jsxs)(l.W2,{className:"withdrawal-section",css:{gap:"$lg"},alignItems:"start",children:[(0,a.jsx)(l.xv,{variant:"h4",children:"Withdrawal Addresses"}),(0,a.jsxs)(i.kC,{direction:"column",className:"single-address-section",css:{gap:"$xs"},children:[(0,a.jsx)(l.xv,{variant:"h5",children:"Principal Address"}),(0,a.jsx)(l.xv,{color:"body",variant:"body",children:"The withdrawal address or contract will receive 100%"}),(0,a.jsx)(l.nv,{color:"obolGreen",readOnly:!0,value:null===ge||void 0===ge?void 0:ge.singleAddress})]}),(0,a.jsxs)(i.kC,{direction:"column",className:"fee-recipient-address-section",css:{gap:"$xs"},children:[(0,a.jsx)(l.xv,{variant:"h5",children:"Fee Recipient Address"}),(0,a.jsx)(l.xv,{color:"body",variant:"body",children:"Address to receive transaction fees from block proposals."}),(0,a.jsx)(l.nv,{color:"obolGreen",readOnly:!0,value:null===ge||void 0===ge?void 0:ge.feeRecipientAddress})]})]}),(0,a.jsx)(i.kC,{direction:"column",children:(0,a.jsx)(l.zx,{color:"primary",type:"submit",css:{"& div":{m:0}},children:(0,a.jsxs)(a.Fragment,{children:[T&&(0,a.jsx)(l.yC,{}),"Confirm and Sign"]})})})]})})]})]})},P=W;W.layout="ProgressTrackerLayout"}},function(e){e.O(0,[88,774,888,179],(function(){return n=17740,e(e.s=n);var n}));var n=e.O();_N_E=n}]);