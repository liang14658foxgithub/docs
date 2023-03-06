import{_ as f,o as t,c as o,b as s,F as d,f as n,t as a,p as v,i as u,d as h,e as k}from"./app.6e3a9219.js";const p="/docs/text.png",g="/docs/github.png",m="/docs/online.png";const c=r=>(v("data-v-233ae447"),r=r(),u(),r),E={class:"container"},w=c(()=>s("div",{class:"title"},"项目分享",-1)),A=c(()=>s("div",{class:"desc"},[h(" 分享个人编写的部分开源前端项目和实用工具,包含项目在线地址，部分开源地址和教程，开源项目可以任意取用(禁止用于学术不端等途径)，欢迎大家为作者寻找项目问题和提出PR，任何问题请联系作者 "),s("a",{href:"mailto:1098884683@qq.com"},"邮箱")],-1)),y={class:"list"},b={class:"img-pic"},B={class:"img-shadow"},j={class:"card-desc"},x=["src","alt"],S={class:"card-word"},C={class:"card-name"},D={class:"card-tag"},V={class:"card-footer"},P=c(()=>s("img",{src:p,alt:"",class:"card-footer-img"},null,-1)),R=["href"],q={key:1,class:"card-footer-word"},I=c(()=>s("img",{src:g,alt:"",class:"card-footer-img"},null,-1)),N=["href"],T={key:3,class:"card-footer-word"},G=c(()=>s("img",{src:m,alt:"",class:"card-footer-img"},null,-1)),O=["href"],z={key:5,class:"card-footer-word"},F=c(()=>s("div",{class:"title divide"},"一起开源",-1)),J=c(()=>s("div",{class:"desc"},[h(" 和作者一起参与开源项目实践，充实你的简历，包括但不限于项目学习，日常开源DEMO编写，参与各类开发竞赛，字学计划，开源之夏，开源社区，以及日常项目外包等，任何问题请联系作者 "),s("a",{href:"mailto:1098884683@qq.com"},"邮箱")],-1)),M={class:"list"},H={class:"img-pic"},L={class:"img-shadow"},U={class:"card-desc"},W=["src","alt"],Y={class:"card-word"},$={class:"card-name"},K={class:"card-tag"},Q={class:"card-footer"},X=c(()=>s("img",{src:p,alt:"",class:"card-footer-img"},null,-1)),Z=["href"],ss={key:1,class:"card-footer-word"},es=c(()=>s("img",{src:g,alt:"",class:"card-footer-img"},null,-1)),ts=["href"],os={key:3,class:"card-footer-word"},cs=c(()=>s("img",{src:m,alt:"",class:"card-footer-img"},null,-1)),as=["href"],rs={key:5,class:"card-footer-word"},is={__name:"TheProject",setup(r){const _=[{name:"基于vitepress的博客搭建",description:"使用vitepress基于vue3和vite搭建一个简单的个人博客页面并且同步到Git Pages",tags:["vue3","vite","vitepress","博客"],link:"https://github.com/aiai0603/aiai0603.github.io",pre:"https://aiai0603.github.io/",href:"/articles/other/vitepress/01.vitepress的搭建",img:"./vitepress.jpg"},{name:"用JS写一个群友力扣排行榜",description:"使用Vue和node实现群友排行榜,配置nginx跨域调用leetcode官网api获取数据",tags:["nodejs","Vue","niginx"],pre:"http://47.97.158.11:8692/leetocde/#/home",link:"https://github.com/aiai0603/leetcode_rank",href:"",img:"./rank.jpg"},{name:"用Electron实现简单md编辑器",description:"使用Electron和Vue3实现一个纯前端的markdown格式编辑器",tags:["Electron","Vue","nodejs"],pre:"",link:"https://github.com/aiai0603/YSU-MD",href:"",img:"./md-editor.jpg"},{name:"基于React的基础管理系统编写",description:"使用React和Springboot是实现的基础后台管理系统",tags:["Raect","React Hooks","Springboot"],pre:"http://47.97.158.11:8087/card/#/login",link:"https://github.com/aiai0603/bysg",href:"",img:"./react.jpg"},{name:"原生Web的小清新风格博客页面",description:"仅使用html5+css+js的纯前端小清新风格博客",tags:["js","html","css"],pre:"",link:"https://github.com/aiai0603/zs_work/tree/master/class/web/31801150-%E5%BC%A0%E5%B8%85-%E8%AE%A1%E7%AE%97%E6%9C%BA1803%E5%A4%A7%E4%BD%9C%E4%B8%9A/%E5%A4%A7%E4%BD%9C%E4%B8%9A",href:"",img:"./react.jpg"},{name:"基于Echarts的人物关系图",description:"使用关系图分析作品人物关系图",tags:["js","html","css"],pre:"",link:"https://github.com/aiai0603/zs_work/tree/master/class/web/31801150-%E5%BC%A0%E5%B8%85-%E8%AE%A1%E7%AE%97%E6%9C%BA1803%E5%A4%A7%E4%BD%9C%E4%B8%9A/%E5%A4%A7%E4%BD%9C%E4%B8%9A",href:"",img:"./react.jpg"}],l=[];return(_s,ls)=>(t(),o("div",E,[w,A,s("div",y,[(t(),o(d,null,n(_,e=>s("div",{class:"card",key:e.name},[s("div",b,[s("div",B,[s("div",j,a(e.description),1)]),s("img",{src:e.img,alt:e.name},null,8,x)]),s("div",S,[s("div",C,a(e.name),1),s("div",D,[(t(!0),o(d,null,n(e.tags,i=>(t(),o("div",{key:i,class:"card-tag-item"},a(i),1))),128))]),s("div",V,[P,e.href?(t(),o("a",{key:0,href:e.href,class:"card-footer-word has"},"文档",8,R)):(t(),o("div",q,"暂无")),I,e.link?(t(),o("a",{key:2,href:e.link,class:"card-footer-word has"},"Git",8,N)):(t(),o("div",T,"暂无")),G,e.pre?(t(),o("a",{key:4,href:e.pre,class:"card-footer-word has"},"预览",8,O)):(t(),o("div",z,"暂无"))])])])),64))]),F,J,s("div",M,[(t(),o(d,null,n(l,e=>s("div",{class:"card",key:e.name},[s("div",H,[s("div",L,[s("div",U,a(e.description),1)]),s("img",{src:e.img,alt:e.name},null,8,W)]),s("div",Y,[s("div",$,a(e.name),1),s("div",K,[(t(!0),o(d,null,n(e.tags,i=>(t(),o("div",{key:i,class:"card-tag-item"},a(i),1))),128))]),s("div",Q,[X,e.href?(t(),o("a",{key:0,href:e.href,class:"card-footer-word has"},"文档",8,Z)):(t(),o("div",ss,"暂无")),es,e.link?(t(),o("a",{key:2,href:e.link,class:"card-footer-word has"},"Git",8,ts)):(t(),o("div",os,"暂无")),cs,e.pre?(t(),o("a",{key:4,href:e.pre,class:"card-footer-word has"},"预览",8,as)):(t(),o("div",rs,"暂无"))])])])),64))])]))}},ds=f(is,[["__scopeId","data-v-233ae447"]]),ps=JSON.parse('{"title":"开源项目","description":"","frontmatter":{"title":"开源项目","layout":"home"},"headers":[],"relativePath":"intent/index.md"}'),ns={name:"intent/index.md"},gs=Object.assign(ns,{setup(r){return(_,l)=>(t(),o("div",null,[k(ds)]))}});export{ps as __pageData,gs as default};
