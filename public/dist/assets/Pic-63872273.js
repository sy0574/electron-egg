import{i as s}from"./main-429c1dad.js";import{i as a}from"./ipcRenderer-5e19eaee.js";import{_ as e,r as t,o as i,b as c,g as o,a as l,w as n,e as p,p as d,f as r}from"./index-4492cee0.js";const f={data:()=>({picPath:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}),methods:{selectPic(){a.invoke(s.selectPic,{}).then((s=>{this.picPath=s}))}}},u=s=>(d("data-v-d083fee8"),s=s(),r(),s),m={id:"os-file-pic"},h=u((()=>o("div",{class:"one-block-1"},[o("span",null," 1. 加载本机图片 ")],-1))),P={class:"one-block-2"},j=u((()=>o("p",null,null,-1)));const v=e(f,[["render",function(s,a,e,d,r,f){const u=t("a-button"),v=t("a-space"),k=t("a-image");return i(),c("div",m,[h,o("div",P,[l(v,null,{default:n((()=>[l(u,{onClick:a[0]||(a[0]=s=>f.selectPic(0))},{default:n((()=>[p("选择图片")])),_:1})])),_:1}),j,l(k,{width:500,src:r.picPath},null,8,["src"])])])}],["__scopeId","data-v-d083fee8"]]);export{v as default};
