import{_ as i,o as l,c as e,a}from"./app.2845802b.js";const g=JSON.parse('{"title":"打包构建","description":"","frontmatter":{},"headers":[{"level":2,"title":"01. 基建","slug":"_01-基建","link":"#_01-基建","children":[]},{"level":2,"title":"02. 开发","slug":"_02-开发","link":"#_02-开发","children":[]},{"level":2,"title":"03. 构建","slug":"_03-构建","link":"#_03-构建","children":[]},{"level":2,"title":"04. 部署","slug":"_04-部署","link":"#_04-部署","children":[]},{"level":2,"title":"05. 研发流程","slug":"_05-研发流程","link":"#_05-研发流程","children":[]},{"level":2,"title":"06. 团队建设","slug":"_06-团队建设","link":"#_06-团队建设","children":[]},{"level":2,"title":"07. 全局思维","slug":"_07-全局思维","link":"#_07-全局思维","children":[]},{"level":2,"title":"08. 全端开发能力","slug":"_08-全端开发能力","link":"#_08-全端开发能力","children":[]},{"level":2,"title":"09. 工程化能力","slug":"_09-工程化能力","link":"#_09-工程化能力","children":[]},{"level":2,"title":"10. 第三方集能力","slug":"_10-第三方集能力","link":"#_10-第三方集能力","children":[]},{"level":2,"title":"11. 技术能力","slug":"_11-技术能力","link":"#_11-技术能力","children":[]}],"relativePath":"articles/other/08.前端架构师技术栈.md"}'),r={name:"articles/other/08.前端架构师技术栈.md"},t=a('<h2 id="_01-基建" tabindex="-1">01. 基建 <a class="header-anchor" href="#_01-基建" aria-hidden="true">#</a></h2><ul><li>包管理：lerna</li><li>环境变量：dotenv</li><li>命令行：commander</li><li>log：npmlog</li><li>命令行交互</li><li>命令行loadding：spinner</li><li>gitflow 自动化</li></ul><h2 id="_02-开发" tabindex="-1">02. 开发 <a class="header-anchor" href="#_02-开发" aria-hidden="true">#</a></h2><p>技术选型</p><ul><li>Vue技术生态：Vue2/3 + Vue-router + Vuex（pina） + TS</li><li>React技术生态：</li><li>移动端适配方案：vm、vh postcss-px-to-viewport</li><li>组件库选型：</li><li>CSS</li><li>跨端技术：Electron Flutter Tauri</li><li>小程序框架：uni-app Taro WePY mpvue :::tips | 框架 | 技术栈 | 微信小程序 | H5 | App | 支付宝/百度小程序 | | Taro | React/Vue | ✅ | ✅ | ✅ | ✅ | | uni-app | Vue | ✅ | ✅ | ✅ | ✅ | | WePY | Vue | ✅ | ❌ | ❌ | ❌ | | mpvue | Vue | ✅ | ✅ | ❌ | ❌ |</li></ul><p>小程序框架对比：</p><p><a href="https://juejin.cn/post/6974584590841167879" target="_blank" rel="noreferrer">https://juejin.cn/post/6974584590841167879</a> :::</p><ul><li>业务系统类型：ToB管理系统 门户网站 移动端H5 小程序</li><li>可视化图标：Echarts Antv</li><li>其他方向：webrtc webgl canvas svg</li></ul><h2 id="_03-构建" tabindex="-1">03. 构建 <a class="header-anchor" href="#_03-构建" aria-hidden="true">#</a></h2><h1 id="打包构建" tabindex="-1">打包构建 <a class="header-anchor" href="#打包构建" aria-hidden="true">#</a></h1><ul><li>代码检查 eslint</li><li>lint检查</li><li>prettier格式化</li><li>githooks：husky</li><li>Stylelint</li></ul><h1 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-hidden="true">#</a></h1><ul><li>bundle-analyzer</li><li>webpack构建优化</li><li>开启gzip extra css</li><li>chunks分包</li><li>路由懒加载|图片处理</li><li>CDN Http2缓存</li><li>treeshaking</li><li>scop hosting</li></ul><h1 id="包管理-打包工具" tabindex="-1">包管理|打包工具 <a class="header-anchor" href="#包管理-打包工具" aria-hidden="true">#</a></h1><ul><li>npm yarn pnpm</li><li>Webpack</li><li>Vite</li><li>Rollup</li><li>Babel sws esbuild</li></ul><h2 id="_04-部署" tabindex="-1">04. 部署 <a class="header-anchor" href="#_04-部署" aria-hidden="true">#</a></h2><p>线上云服务 CName域名转发</p><p>域名备案和解析 云服务ECS</p><p>Https证书 云CDN</p><p>云OSS</p><p>Ningx代理配置</p><h2 id="_05-研发流程" tabindex="-1">05. 研发流程 <a class="header-anchor" href="#_05-研发流程" aria-hidden="true">#</a></h2><ul><li>架构设计</li><li>技术选型</li><li>技术方案设计</li><li>数据库设计</li><li>制定计划</li><li>多人协作</li><li>code review</li><li>bug 修复流程</li><li>功能迭代</li><li>复盘</li></ul><h2 id="_06-团队建设" tabindex="-1">06. 团队建设 <a class="header-anchor" href="#_06-团队建设" aria-hidden="true">#</a></h2><h2 id="_07-全局思维" tabindex="-1">07. 全局思维 <a class="header-anchor" href="#_07-全局思维" aria-hidden="true">#</a></h2><h2 id="_08-全端开发能力" tabindex="-1">08. 全端开发能力 <a class="header-anchor" href="#_08-全端开发能力" aria-hidden="true">#</a></h2><h2 id="_09-工程化能力" tabindex="-1">09. 工程化能力 <a class="header-anchor" href="#_09-工程化能力" aria-hidden="true">#</a></h2><h2 id="_10-第三方集能力" tabindex="-1">10. 第三方集能力 <a class="header-anchor" href="#_10-第三方集能力" aria-hidden="true">#</a></h2><h2 id="_11-技术能力" tabindex="-1">11. 技术能力 <a class="header-anchor" href="#_11-技术能力" aria-hidden="true">#</a></h2>',29),n=[t];function h(d,s,_,c,u,o){return l(),e("div",null,n)}const f=i(r,[["render",h]]);export{g as __pageData,f as default};
