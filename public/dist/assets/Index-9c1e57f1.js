import{i as t}from"./main-429c1dad.js";import{i}from"./ipcRenderer-5e19eaee.js";import{_ as e,h as s,r as n,o,b as a,g as l,a as d,w as c,e as f,p as r,f as p}from"./index-4492cee0.js";const b={data:()=>({views:[{type:"main",title:"通知标题",subtitle:"副标题",body:"这是通知内容-默认",silent:!0},{type:"main",title:"提示音",subtitle:"副标题-提示音",body:"这是通知内容-提示音",silent:!1},{type:"main",title:"点击通知事件",subtitle:"副标题-点击通知事件",body:"这是通知内容-点击通知事件",clickEvent:!0},{type:"main",title:"关闭通知事件",subtitle:"副标题-关闭通知事件",body:"这是通知内容-点击通知事件",closeEvent:!0}]}),mounted(){this.init()},methods:{init(){i.removeAllListeners(t.sendNotification),i.on(t.sendNotification,((t,i)=>{"[object Object]"==Object.prototype.toString.call(i)&&this.$message.info(i.msg)}))},sendNotification(e){i.send(t.sendNotification,s(this.views[e]))}}},m={id:"app-base-notification"},u=(t=>(r("data-v-6555f14e"),t=t(),p(),t))((()=>l("div",{class:"one-block-1"},[l("span",null," 1. 弹出桌面通知 ")],-1))),v={class:"one-block-2"};const y=e(b,[["render",function(t,i,e,s,r,p){const b=n("a-button"),y=n("a-space");return o(),a("div",m,[u,l("div",v,[d(y,null,{default:c((()=>[d(b,{onClick:i[0]||(i[0]=t=>p.sendNotification(0))},{default:c((()=>[f("默认")])),_:1}),d(b,{onClick:i[1]||(i[1]=t=>p.sendNotification(1))},{default:c((()=>[f("发出提示音")])),_:1}),d(b,{onClick:i[2]||(i[2]=t=>p.sendNotification(2))},{default:c((()=>[f("点击通知触发事件")])),_:1}),d(b,{onClick:i[3]||(i[3]=t=>p.sendNotification(3))},{default:c((()=>[f("关闭通知触发事件")])),_:1})])),_:1})])])}],["__scopeId","data-v-6555f14e"]]);export{y as default};
