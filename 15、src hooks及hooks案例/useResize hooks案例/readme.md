实现一个基于vue的依赖包，并发布到npm上
需实现支持一个函数同时支持hook 和 自定义指令 去监听dom宽高的变化
pnpm init
tsc --init
新建vite.config.ts
新建src/index.ts
新建index.d.ts
pnpm i vue -D // 项目必定是基于vue的，该依赖安装依赖时vue放到devDependencies时就可以了，所以要加-D
pnpm i vite -D 
实现src/index.ts中代码
配置vite.config.ts 配置=》构建选项=》build.lib=》库模式
package.json 配置scripts  "build": "vite build"
pnpm run build
package.json 配置
  "main": "dist/useResizeGuoqin.mjs", // import时找这个
  "module": "dist/useResizeGuoqin.umd.js", // commonJS(require)找这个
   "files": ["dist", "index.d.ts"], // 往npm上放的东西

发包
npm login
npm publish

测试是否可用
构建vite+vue项目 npm init vite@latest
构建vue项目+vite npm init vue@latest vue配置项多
安装useResizeGuoqin插件

样式
#resize {
  border: 1px solid black;
  resize: both;
  overflow: hidden;
}

// 用法一 index.ts中有export default useResizeGuoqin，所以可以用导入的方式
import useResizeGuoqin from 'use-resize-guoqin'
import {onMounted} from 'vue'
onMounted(() => {
  useResizeGuoqin(document.querySelector('#resize') as HTMLElement, (e: any) => {
    console.log(e)
  })
})

方法二：在main.ts导入，利用调用插件install方法,定义了全局指令v-use-resize-guoqin 
import useResizeGuoqin from 'use-resize-guoqin'
app.use(useResizeGuoqin)

在对应的元素上添加 <div id="resize" v-use-resize-guoqin="test"></div>
const test = (e: any) => {
  console.log('e', e)
}
