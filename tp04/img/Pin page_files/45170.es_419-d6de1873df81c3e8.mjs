"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[45170],{762587:e=>{e.exports=function(e,t,r,i){t=t||"&",r=r||"=";var n={};if("string"!=typeof e||0===e.length)return n;var a=/\+/g;e=e.split(t);var o=1e3;i&&"number"==typeof i.maxKeys&&(o=i.maxKeys);var s=e.length;o>0&&s>o&&(s=o);for(var l=0;l<s;++l){var d,c,u,p,m=e[l].replace(a,"%20"),_=m.indexOf(r);(_>=0?(d=m.substr(0,_),c=m.substr(_+1)):(d=m,c=""),u=decodeURIComponent(d),p=decodeURIComponent(c),Object.prototype.hasOwnProperty.call(n,u))?Array.isArray(n[u])?n[u].push(p):n[u]=[n[u],p]:n[u]=p}return n}},712361:e=>{var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,i,n){return(r=r||"&",i=i||"=",null===e&&(e=void 0),"object"==typeof e)?Object.keys(e).map(function(n){var a=encodeURIComponent(t(n))+i;return Array.isArray(e[n])?e[n].map(function(e){return a+encodeURIComponent(t(e))}).join(r):a+encodeURIComponent(t(e[n]))}).join(r):n?encodeURIComponent(t(n))+i+encodeURIComponent(t(e)):""}},817673:(e,t,r)=>{t.decode=t.parse=r(762587),t.encode=t.stringify=r(712361)},263148:(e,t,r)=>{r.d(t,{Se:()=>f,iw:()=>k,gV:()=>h,G3:()=>b,Gj:()=>y,Jd:()=>_,$3:()=>g});var i=r(29156),n=r(658583),a=r(622541),o=r(107366),s=r(460270);let l=e=>"string"!=typeof e&&e?e.state:null;var d=r(337478),c=r(940910),u=r(998449),p=r(797258),m=r(467139);let _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),g=({location:e,pinId:t,surface:r})=>!!r&&!m.ZF.includes(r)||e.pathname.includes(t),f=(e,t)=>{let r=Math.round(1e3*Math.random())+"",i=Math.round(1e3*Math.random())+"";n.t8((0,a.GS)(r),i);let o={token:`${r}-${i}`,url:e,...t&&!t.params?t.queryParams:t?.params&&{pin:t.params.pinId??void 0,isThirdPartyAd:t.params.isThirdPartyAd??void 0,csr:t.params.csrId&&!t.params.pinId?t.params.csrId:void 0,client_tracking_params:t.params.clientTrackingParams,aux_data:t.params.auxData?JSON.stringify(t.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(o)}`},y=(e,t)=>{(0,i.Z)(f(e,t),!0,t?.features)},k=async({clientTrackingParams:e,href:t,isMounted:r,pinId:i,spamCheckCallback:n})=>{let a=await (0,o.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:i,url:t}});if(!a.resource_response.error&&r){let{message:e,redirect_status:t,url:r}=a.resource_response.data||{};n({blocked:["blocked","suspicious","porn"].includes(t),message:e,redirectStatus:t,sanitized_url:r})}},b=({event:e,onHistoryChange:t,href:r,history:n,target:a})=>{let o=(0,s.Z)(r),d=l(r)??{},m=(0,c.Z)(o);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===a?(0,i.Z)(o,"blank"===a):n&&m===p.Z.SAME_ORIGIN&&(n.push((0,u.Z)({url:o}),{from:n.location,...d}),t&&t({event:e}))}},340370:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(667294),n=r(616550),a=r(798580),o=r(263148),s=r(96761),l=r(460270),d=r(862249),c=r(557874),u=r(953565);function p(e){let{externalData:t,href:r,onHistoryChange:p,target:m}=e,[_,h]=(0,i.useState)(null),[g,f]=(0,i.useState)(!1),y=(0,n.k6)(),k=(0,n.TH)(),b=(0,l.Z)(r),P=(0,d.Z)({url:b}),{showWarning:I}=(0,c.s)()??{},{pin:A,surface:S}=t||{},w=A?(0,a.Z)({boardUrl:A.board?.url,location:k,pinId:A.entityId,pinnerUserName:A.pinner?.username,storyPinDataId:A.storyPinDataId,trackingParams:A.trackingParams,trackingParamsMap:A.trackingParamsMap}):null,v=(0,s.Z)();return(0,i.useEffect)(()=>(f(!0),()=>{f(!1)}),[]),(0,i.useEffect)(()=>{P&&A&&null===_&&g&&(!A.promoter||A.isDownstreamPromotion)&&(0,o.$3)({location:k,pinId:A.entityId,surface:S})&&(0,o.iw)({clientTrackingParams:w,isMounted:g,pinId:A.entityId,spamCheckCallback:e=>h(e),href:b})},[w,A,S,b,P,g,k,_]),({event:e})=>{if(!(0,o.gV)({isOffsiteUrl:P,event:e})){if(e.preventDefault(),!r||"string"==typeof r&&r.startsWith("#")){(0,u.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:k.pathname,href:r}});return}P||t?.dangerouslyForceOffsiteUrl?v({auxData:t?.auxData,clientTrackingParams:w,pin:t?.pin&&{attributionSourceId:t.pin.attributionSourceId,campaignId:t.pin.campaignId,isPromoted:t.pin.isPromoted,pinPromotionId:t.pin.pinPromotionId,isThirdPartyAd:t.pin.isThirdPartyAd,advertiserId:t.pin.advertiserId,destinationUrl:t.pin.destinationUrl,link:t.pin.link,domain:t.pin.domain},pinId:t?.pin?.entityId,queryParams:t?.queryParams,showWarning:I,spamCheck:_,url:b}):(0,o.G3)({event:e,href:r,history:y,onHistoryChange:p,target:"blank"===m?"blank":null})}}}},96761:(e,t,r)=>{r.d(t,{Z:()=>m});var i=r(453880),n=r(934378),a=r(263032),o=r(86785),s=r(214877),l=r(263148),d=r(171966);let c=(e,t,r)=>{let i=document.createElement("a");i.setAttribute("href",t),i.setAttribute("target","_blank"),i.setAttribute("rel","noopener nofollow noreferrer"),i.style.cursor="pointer",i.style.display="block",i.setAttribute(n.$N.ATTRIBUTION_SOURCE_ID,e),i.setAttribute(n.$N.ATTRIBUTE_DESTINATION,r),i.setAttribute(n.$N.ATTRIBUTE_ON,r),i.click()},u=(e,t,r,i,o,s,l)=>{let d=(0,a.m_)(e,[r,i,o],!0,s,l),c=document.createElement("a");c.setAttribute("href",t),c.setAttribute("target","_blank"),c.setAttribute("rel","noopener nofollow noreferrer"),c.style.cursor="pointer",c.style.display="block",c.setAttribute(n.NR.SOURCE,d),c.click()},p=()=>{let{logContextEvent:e}=(0,s.v)();return({attributionSourceId:t,auxData:r,campaignId:n,clientTrackingParams:a,href:s,isPromoted:d,pinId:p,pinPromotionId:m,isThirdPartyAd:_,advertiserId:h,destinationUrl:g,link:f,domain:y})=>{if(!d)return!1;let k=(0,i.Z)(),b=(0,l.Se)(s,{params:{pinId:p,csrId:null,clientTrackingParams:a,auxData:r,isThirdPartyAd:_}}),P=k?.userAgent.browserName??"";if((0,o.G6)(P)){let{group:r}=k?.experimentsClient.checkExperiment("m10n_event_conversion_measurement")??{},i=k?.userAgent.browserVersion?k.userAgent.browserVersion:"0.0",o=parseFloat(i.split(".")[0]+"."+i.split(".")[1]);if(t&&o>=14.1&&["enabled_safari"].includes(r))return c(t,b,s),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_pcm:!0,attribution_source_id:t,page_url:s}}),!0}else if((0,o.i7)(P)&&window.document.featurePolicy?.allowsFeature("attribution-reporting"))return u(t,b,g,f,y,n,h),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_arapi:!0,attribution_source_id:t,page_url:s}}),!0;return!1}},m=e=>{let t=p();return({auxData:r,clientTrackingParams:i,pin:n,pinId:a,queryParams:o,showWarning:s,spamCheck:c,url:u})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(u,{clientTrackingParams:i,pinId:a,hasPin:!!n,auxData:r,isThirdPartyAd:n?.isThirdPartyAd});return}if(!n&&!e?.isFromClickthroughLink){(0,l.Gj)(u,o?{queryParams:o}:{params:{pinId:a}});return}if(c?.blocked){s?.(c);return}n&&t({attributionSourceId:n.attributionSourceId,auxData:r,campaignId:n.campaignId?String(n.campaignId):null,clientTrackingParams:i,href:u,isPromoted:n.isPromoted,pinId:a,pinPromotionId:n.pinPromotionId?String(n.pinPromotionId):null,isThirdPartyAd:n.isThirdPartyAd,advertiserId:n.advertiserId?n.advertiserId:null,destinationUrl:n.destinationUrl,link:n.link,domain:n.domain})||(0,l.Gj)(u,{params:{clientTrackingParams:i,auxData:r,pinId:a,isThirdPartyAd:n?.isThirdPartyAd}})}}},460270:(e,t,r)=>{r.d(t,{Z:()=>i});let i=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},998449:(e,t,r)=>{r.d(t,{Z:()=>a});let i=(e,t)=>0===e.lastIndexOf(t,0);var n=r(885896);let a=({url:e})=>{let t=(0,n.Z)("/");return i(e,t)?e.substr(t.length-1):e}},171966:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(107366),n=r(263148);function a(e,t){let{auxData:r,clientTrackingParams:a,hasPin:o,pinId:s,isThirdPartyAd:l}=t||{},d={pin_id:s,check_only:!0,client_tracking_params:o?a:void 0,url:e,aux_data:JSON.stringify(r)};l&&(d.third_party_ad=s,delete d.pin_id),(0,i.Z)({url:"/v3/offsite/",data:d}).then(t=>{if(t&&t.resource_response&&!t.resource_response.error){let{resource_response:e}=t,{redirect_status:r,url:i}=e.data;if(!["blocked","suspicious","porn"].includes(r)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(i);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,n.Gj)(e,{params:o?{pinId:s,clientTrackingParams:a,auxData:r,isThirdPartyAd:l}:{pinId:s}})})}},467139:(e,t,r)=>{r.d(t,{UP:()=>s,Wv:()=>n,ZF:()=>i,zI:()=>a,zl:()=>o});let i=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],n=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],a=[...n,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid","ShoppingTool"],o=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],s=["BaseBoardPinGrid"]},557874:(e,t,r)=>{r.d(t,{Z:()=>g,s:()=>h});var i=r(667294),n=r(342513),a=r(608575),o=r(883119),s=r(930837),l=r(140017),d=r(339001),c=r(785893);let u=()=>{let e=(0,l.ZP)(),{dismissWarning:t}=h()??{};return(0,c.jsx)(o.xu,{paddingX:3,children:(0,c.jsx)(o.zx,{color:"red",fullWidth:!0,onClick:t,text:e.bt("OK", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{let e=(0,l.ZP)();return(0,c.jsx)(o.xv,{inline:!0,weight:"bold",children:(0,c.jsx)(o.rU,{display:"inlineBlock",href:"https://policy.pinterest.com/community-guidelines#section-spam",target:"blank",underline:"hover",children:e.bt("Más información", "Learn more", "Link text leading to policy website", undefined, true)})})},m=({message:e,sanitized_url:t})=>{let r=(0,l.ZP)(),{dismissWarning:i}=h()??{};return(0,c.jsx)(s.ZP,{accessibilityModalLabel:r.bt("Bloqueamos este enlace", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),footer:(0,c.jsx)(u,{}),heading:r.bt("¡Atención!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),onDismiss:i,children:(0,c.jsxs)(o.xu,{padding:6,children:[(0,c.jsx)(o.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,c.jsx)(p,{},"learnMoreLink")})}),(0,c.jsxs)(o.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,c.jsx)(o.xu,{marginEnd:3,children:(0,c.jsx)(o.JO,{accessibilityLabel:r.bt("Dirección de enlace bloqueada", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,c.jsx)(o.xv,{inline:!0,lineClamp:1,weight:"bold",children:a.parse(t).hostname})]})]})})},{Provider:_,useMaybeHook:h}=(0,n.Z)("SpammyClickthrough");function g({children:e}){let[t,r]=(0,i.useState)(null),n=(0,i.useCallback)(()=>{r(null)},[r]),a=(0,i.useCallback)(e=>{r(e)},[r]),o=(0,i.useMemo)(()=>({dismissWarning:n,showWarning:a}),[n,a]);return(0,c.jsxs)(_,{value:o,children:[t&&(0,c.jsx)(m,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/45170.es_419-d6de1873df81c3e8.mjs.map