import{h as u,y as d}from"./hooks.module.Bd9tvhD7.js";import{m,a as p}from"./index.Bda8kKQR.js";import{l as _}from"./preact.module.BLKjwoRb.js";function v(e,n,i){let f=new Set([...n,void 0]);return e.listen((a,l,t)=>{f.has(t)&&i(a,l,t)})}function y(e,n={}){let[,i]=u({}),[f]=u(e.get());return d(()=>{f!==e.get()&&i({})},[]),d(()=>{let a,l,t,r=()=>{a||(a=1,l=setTimeout(()=>{a=void 0,i({})}))};return n.keys?t=v(e,n.keys,r):t=e.listen(r),()=>{t(),clearTimeout(l)}},[e,""+n.keys]),e.get()}const g=p(!1);m({});var b=0;function s(e,n,i,f,a,l){n||(n={});var t,r,o=n;if("ref"in o)for(r in o={},n)r=="ref"?t=n[r]:o[r]=n[r];var c={type:e,props:o,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--b,__i:-1,__u:0,__source:a,__self:l};if(typeof e=="function"&&(t=e.defaultProps))for(r in t)o[r]===void 0&&(o[r]=t[r]);return _.vnode&&_.vnode(c),c}function S(){return y(g),s("button",{class:"btn btn-outline-secondary ms-1 ms-md-2 position-relative cart-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvas-cart","aria-controls":"offcanvas-cart",children:s("div",{class:"d-inline-flex align-items-center",children:[s("i",{class:"fa fa-shopping-cart"}),s("span",{class:"visually-hidden-focusable",children:"Cart"}),s("span",{class:"cart-content"})]})})}export{S as default};