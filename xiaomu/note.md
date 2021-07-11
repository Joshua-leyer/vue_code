




### vue 使用 element-ui 

vue create element-ui

npm i element-ui -s

import ElementUI from 'element-ui'


//vue3.x 的内容 use  
Vue.use(ElementUI) 

import 'element-ui/lib/theme-chalk/index.css'



npm run build  

按需加载的方式

安装 babel-plugin-component

npm install babel-plugin-component -D

项目会出现 babel.config.js 

```js

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins : [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
        
      }
    ]
  ]
}
```


### 使用 vue 的插件方法引用 add 命令添加

vue add element 