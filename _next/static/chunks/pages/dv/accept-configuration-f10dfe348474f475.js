(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{67333:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dv/accept-configuration",function(){return n(11777)}])},24585:function(e,s,n){"use strict";n.d(s,{I:function(){return a}});var r=n(85893),t=n(71553),i=n(84373),o=n(64240),a=function(e){var s=e.recipients,n=(0,i.Z)(s.map((function(e){return e.address})));return(0,r.jsx)(t.iA,{columns:[{accessorKey:"operator",header:"Operator Address"},{accessorKey:"split",header:"Split",css:{width:"70px"}}],rows:s.map((function(e,s){return{operator:(0,r.jsx)(o.M,{ensName:n[s],address:e.address}),split:"".concat(e.split||e.percentAllocation," %")}}))})}},11777:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return k}});var r=n(34051),t=n.n(r),i=n(85893),o=n(93445),a=n(71553),c=n(8687),d=n(43080),l=n(37274),h=n(87536),u=n(72534),x=n(48847),v=n(2983),p=n(11163),g=n(8100),f=n(67294),m=n(79986),j=n(76225),b=n(24585),w=function(e){var s=e.splitId,n=e.recipients;return(0,i.jsxs)(a.W2,{className:"withdrawal-section",css:{gap:"$xl"},alignItems:"start",children:[(0,i.jsx)(a.xv,{variant:"h4",children:"Splitter Reward Addresses"}),(0,i.jsx)(b.I,{recipients:n}),(0,i.jsxs)(a.W2,{variant:"card",className:"enr-section",alignItems:"start",css:{gap:"$sm",p:"$sm"},children:[(0,i.jsx)(a.xv,{color:"body",variant:"subline",css:{lineHeight:"$lg",textTransform:"uppercase",letterSpacing:"1px"},children:"Splitter Address"}),(0,i.jsx)(a.IK,{readOnly:!0,value:s}),(0,i.jsxs)(a.rU,{href:"https://".concat(d.pn,".etherscan.io/address/").concat(s,"#code"),target:"_blank",children:["View on Etherscan ",(0,i.jsx)(a.ZJ,{})]})]})]})},y=n(25089);function $(e,s,n,r,t,i,o){try{var a=e[i](o),c=a.value}catch(d){return void n(d)}a.done?s(c):Promise.resolve(c).then(r,t)}var C=function(){var e=(0,u.kR)(),s=e.account,n=e.provider,r=e.chainId,b=(0,h.cI)({mode:"onChange"}),C=b.control,k=b.handleSubmit,_=b.formState,N=_.isDirty,S=_.isValid,I=(0,p.useRouter)(),T=(0,f.useState)(!1),A=T[0],W=T[1],E=(0,f.useState)(!1),R=E[0],O=E[1],z=(0,f.useState)(),D=z[0],G=z[1],M=(0,f.useState)(""),P=M[0],L=M[1],Z=(0,l.o)((function(e){return e.clusterDefinitionData})),F=(0,l.o)((function(e){return e.updateJoinFirstStep})),K=(0,l.o)((function(e){return e.completeOperatorStep})),Y=(0,l.o)((function(e){return e.enableOperatorStep}));(null===Z||void 0===Z?void 0:Z.config_hash)&&F("/dv#".concat(null===Z||void 0===Z?void 0:Z.config_hash));var H=function(){var e,i=(e=t().mark((function e(i){var o,a,c,l,h,u,p,g;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(""),O(!0),o={operator_config_hash:null===Z||void 0===Z?void 0:Z.config_hash},e.next=6,(0,x.AM)(n,r,s,o);case 6:return a=e.sent,c={enr:i.enr},e.next=10,(0,x.Ol)(n,r,s,c);case 10:return l=e.sent,h={address:s,enr:i.enr,enr_signature:l,fork_version:d.se,version:d.q4.STABLE},e.next=14,(0,v.R)({token:a,data:h,configHash:null===Z||void 0===Z?void 0:Z.config_hash});case 14:u=e.sent.data,G(u),O(!1),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0),L(null===(p=e.t0.response)||void 0===p||null===(g=p.data)||void 0===g?void 0:g.message),O(!1);case 25:case"end":return e.stop()}}),e,null,[[0,19]])})),function(){var s=this,n=arguments;return new Promise((function(r,t){var i=e.apply(s,n);function o(e){$(i,r,t,o,a,"next",e)}function a(e){$(i,r,t,o,a,"throw",e)}o(void 0)}))});return function(e){return i.apply(this,arguments)}}(),Q=(0,g.ZP)("/dv/".concat(null===Z||void 0===Z?void 0:Z.config_hash),v.FU,{refreshInterval:function(e){return(null===e||void 0===e?void 0:e.definition_hash)?0:1e3}}).data,q=(0,u.DS)(Z.withdrawal_address);if(console.log("splitMetadata",q),!Q)return(0,i.jsx)(a.xv,{children:"Loading..."});var J=Q.operators.length,U="".concat("https://dev.launchpad.obol.tech","/dv#").concat(Q.config_hash),X=function(){return(0,i.jsx)(a.W2,{className:"cluster-details",alignItems:"start",children:(0,i.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(a.xv,{variant:"h4",children:"Cluster Details"}),(0,i.jsxs)(o.kC,{direction:"column",className:"cluster-name-section",css:{gap:"$sm"},children:[(0,i.jsx)(a.xv,{color:"body",variant:"body",children:"These are the group details that you need to review and accept to continue.\xa0"}),(0,i.jsx)(a.xv,{color:"body",variant:"body",children:"The status of each participant will update once they have signed and confirmed the configuration."}),(0,i.jsxs)(o.kC,{css:{gap:"$2xl"},children:[(0,i.jsx)(c.Mz,{heading:"Cluster Name",subHeading:Q.name}),(0,i.jsx)(c.Mz,{heading:"Group Size",subHeading:J.toString(),tooltipContent:"Group Size: The number of operators in the cluster. The minimum is 4, for now the maximum is capped at 10."}),(0,i.jsx)(c.Mz,{heading:"Threshold",subHeading:"".concat(Q.threshold,"/").concat(J),tooltipContent:"Threshold: The number of nodes that need to be functioning for the validator to stay active."})]}),(0,i.jsx)(j.SS,{operators:null===Q||void 0===Q?void 0:Q.operators})]})]})})},B=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.kC,{css:{backgroundColor:"$bg03",borderRadius:"$1",gap:"$xs",p:"$sm",boxSizing:"border-box",width:"$full"},children:[(0,i.jsx)(a.xu,{children:(0,i.jsx)(a.nQ,{})}),(0,i.jsx)(a.xv,{variant:"body",css:{fontWeight:"$bold",color:"$light"},children:"Confirmation signature successfully submitted"})]}),(0,i.jsxs)(o.kC,{css:{backgroundColor:"$bg03",borderRadius:"$1",gap:"$xs",p:"$sm",boxSizing:"border-box",width:"$full"},children:[(0,x.YC)(null===Q||void 0===Q?void 0:Q.operators)?(0,i.jsx)(a.xu,{children:(0,i.jsx)(a.nQ,{})}):(0,i.jsx)(a.xu,{children:(0,i.jsx)(a.ZG,{})}),(0,i.jsx)(o.kC,{css:{fd:"column",gap:"$xs"},children:(0,i.jsx)(a.xv,{variant:"body",css:{fontWeight:"$bold",color:"$light"},children:"Awaiting all group signatures to proceed to Distributed Key Generation."})})]}),(0,i.jsx)(c.DM,{heading:"Group Invite Link",content:U})]})},V=function(){return(0,i.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(a.xv,{variant:"h3",children:"Accept Configuration"}),(0,i.jsx)(c.qN,{}),(0,i.jsx)(a.W2,{className:"success-section",alignItems:"start",css:{gap:"$xs"},children:(0,i.jsxs)(o.kC,{css:{backgroundColor:"$bg03",borderRadius:"$1",gap:"$xs",p:"$sm",boxSizing:"border-box",width:"$full"},children:[(0,i.jsx)(a.xu,{children:(0,i.jsx)(a.nQ,{})}),(0,i.jsx)(a.xv,{variant:"body",css:{fontWeight:"$bold",color:"$light"},children:"All operators can now proceed to the Distributed Key Generation phase"})]})}),(0,i.jsx)(a.W2,{children:(0,i.jsx)(a.zx,{fullWidth:!0,onClick:function(){return function(){K("dv-accept-config");var e=Y("dv-dkg");I.push(e.href)}()},children:"Continue"})})]})};if((0,x.YC)(null===Q||void 0===Q?void 0:Q.operators)&&(null===Q||void 0===Q?void 0:Q.definition_hash))return(0,i.jsx)(V,{});var ee=Q.operators.find((function(e){var n;return(null===e||void 0===e||null===(n=e.address)||void 0===n?void 0:n.toLowerCase())===(null===s||void 0===s?void 0:s.toLowerCase())}));(0,x._h)(ee)&&!D&&G(ee);var se=function(){return(0,i.jsx)(y.T,{name:"reward_split_withdrawal_flow",children:(null===q||void 0===q?void 0:q.recipients)&&(0,i.jsx)(w,{recipients:null===q||void 0===q?void 0:q.recipients,splitId:null===Z||void 0===Z?void 0:Z.withdrawal_address})})};return(0,i.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(a.xv,{variant:"h3",children:D?"Waiting for all participants to accept configuration":"Accept Configuration"}),(0,i.jsx)(o.l0,{onSubmit:k(H),children:(0,i.jsxs)(o.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(X,{}),(0,i.jsx)(se,{}),D?(0,i.jsx)(a.W2,{className:"waiting-section",alignItems:"start",css:{gap:"$lg"},children:(0,i.jsx)(B,{})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,i.jsxs)(o.kC,{direction:"column",css:{gap:"$sm"},children:[(0,i.jsxs)(o.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,i.jsx)(a.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"Your Charon client ENR"}),(0,i.jsx)(a.KZ,{content:'An ENR is an "Ethereum Node Record", and is used to identify your client to the other clients in the cluster."',children:(0,i.jsx)(a.xu,{css:{display:"flex"},children:(0,i.jsx)(a.by,{})})})]}),(0,i.jsx)(m.i,{control:C,name:"enr"})]}),(0,i.jsxs)(a.rU,{href:"https://docs.obol.tech/docs/next/int/faq/errors#enrs-keys",target:"_blank",children:["More on Ethereum Node Records ",(0,i.jsx)(a.ZJ,{})]})]}),Q.withdrawal_address?(0,i.jsxs)(a.W2,{className:"withdrawal-section",css:{gap:"$sm"},alignItems:"start",children:[(0,i.jsxs)(o.kC,{direction:"column",className:"single-address-section",css:{gap:"$sm"},children:[(0,i.jsx)(a.xv,{variant:"h4",children:"Single Address"}),(0,i.jsx)(a.xv,{color:"body",variant:"body",children:"The withdrawal address or contract will receive 100%"}),(0,i.jsx)(a.nv,{color:"obolGreen",readOnly:!0,value:Q.withdrawal_address})]}),(0,i.jsxs)(o.kC,{direction:"column",className:"fee-recipient-address-section",css:{gap:"$sm"},children:[(0,i.jsx)(a.xv,{variant:"h4",children:"Fee Recipient"}),(0,i.jsx)(a.xv,{color:"body",variant:"body",children:"Address to receive transaction fees from block proposals."}),(0,i.jsx)(a.nv,{color:"obolGreen",readOnly:!0,value:Q.fee_recipient_address})]})]}):(0,i.jsxs)(a.W2,{className:"withdrawal-section",css:{gap:"$xl"},alignItems:"start",children:[(0,i.jsx)(a.xv,{variant:"h4",children:"Withdrawal Address"}),(0,i.jsx)(a.xv,{color:"body",variant:"body",children:"Enter each recipient\u2019s address and their share. Ownership must\n                  add to 100%."}),(0,i.jsx)(a.xv,{color:"body",variant:"body",children:"By default, a 2% of rewards are allocated to be used by Obol\n                  for Public Goods."})]}),(0,i.jsxs)(a.W2,{className:"confirm-details-section",alignItems:"start",css:{gap:"$lg"},children:[(0,i.jsx)(a.xv,{variant:"h4",children:"Confirm Details"}),(0,i.jsxs)(o.kC,{css:{gap:"$xs",width:"$full"},children:[(0,i.jsx)(a.xu,{children:(0,i.jsx)(a.XZ,{checked:A,onCheckedChange:function(){return W(!A)}})}),(0,i.jsx)(a.xv,{variant:"body",children:"You will be prompted to sign a message with your wallet. This signature is attesting to the fact that:"})]}),(0,i.jsx)(a.sQ,{heading:"You have confirmed the withdrawal address for the validators to be created is correct. If this address is a contract, you have confirmed the contract implementation is correct. If this address is an externally-owned account, you have confirmed that the EOA custody is secure. This address is where the principal and rewards for all created validators will be credited to and the address cannot be modified."}),(0,i.jsx)(a.sQ,{heading:"You have submitted your charon node's Ethereum Node Record (ENR) correctly. This signature is the authorisation of this charon client to act on your behalf."}),P&&(0,i.jsxs)(a.mh,{css:{backgroundColor:"$test"},children:[(0,i.jsx)(a.xu,{children:(0,i.jsx)(a.zM,{size:"lg",color:"body"})}),(0,i.jsx)(o.kC,{direction:"column",css:{gap:"$sm"},children:(0,i.jsx)(o.kC,{direction:"column",css:{gap:"$xs"},children:(0,i.jsx)(a.xv,{color:"textLight",children:P})})})]}),(0,i.jsxs)(o.kC,{direction:"column",children:[(0,i.jsx)(a.zx,{color:"primary",type:"submit",css:{"& div":{m:0}},disabled:!N||!S||!s||!A,children:(0,i.jsxs)(i.Fragment,{children:[R&&(0,i.jsx)(a.yC,{}),"Confirm and Sign"]})}),!s&&(0,i.jsx)(a.xv,{variant:"metadata",color:"test",children:"Please connect your wallet"})]})]})]})]})})]})},k=C;C.layout="OperatorProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],(function(){return s=67333,e(e.s=s);var s}));var s=e.O();_N_E=s}]);