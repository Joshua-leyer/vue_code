### 3-1

! 更换vue/cli手脚架版本

### 3-2

vue 使用




### 4-1 CORS跨域

浏览, 同源策略 同域名, 通端口, 同协议

CORS , JSON , 代理跨域 

Ease Mock 网站 , 上面有免费的接口  , 2021 这个网站我没访问到.


cnpm install axios --save-dev 

他自己举了个例子疯狂说，这种就是CORS跨域, 奶奶的鬼知道他说的是那种方式.

说只需要后端做修改, TM 的一节课视频下来都没看明白后端修改哪里.

### 4-2 JSONP跨域

### 4-3 代理

!! 这网上教程真TM 操蛋

### 4-6 

这一节上来TM 的就是自己的vuex插件 已经安装了，我TM 的从头看了一遍，根本没有。讲的什么JB 课程。草了呀。学这种课真的恶心人.


cnpm install vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie --save-dev


### 4-7 路由

这教程真JB 扯淡,写了将近20分钟, 最后 路径都能写错了。一个错, 全都错, 我写的时候都蛋疼，看着都烦。给学者造成完全没有必要的困难. 傻逼这人.还TM 在慕课卖好几百。谁买谁傻逼


这个教程的 router设置的好奇怪,   
home 用的home组件, 然后重定向到 index

这里要熟练 vue-router 的子路由关系问题, 写法. 

### 4-8 Storage 封装

cookie, localStorage , sessionStorage

存储大小: cookie 4k,    storage 5M  
有效期: cookie拥有有效期 , storage永久存储  
Cookie会发送到服务端, 存储在内存中, Storage只存储在浏览器  
路径: Cookie有路径限制 , Storage只存储在域名下  
API: Cookie 没有特定的api , Storage有对应的API  

!! Cookie 会在访问服务器的时候自动的发送给服务端, 有意思吧, 这种东西我查的几乎所有文章他们都不会提到的, 千篇一律的抄.   TM的都不知道完整的一套过程,天天讲毛线的知识点.  J最开始写node.js 登录功能的时候, 我就不知道如何携带上cookie, 原来浏览器会自动带着cookie , 这种东西没人说. 草

cookie有路径限制 , ??? 怎么设置路径限制? TM 的又不说. 

href : https://segmentfault.com/a/1190000004556040


文件夹 /storage/index.js 中自己手写一个封装的storage函数, 方便自己操作storage

### 4-9 错误拦截


我看的教程都是直接安装axios 就行了，这个教程还要安装vue-axios , 他也不说为什么, 傻逼
一般看到的是从Vue实例原型上挂在上去axios, 这个vue-axios插件就类似起到这个功能, 还是别用了,不利于理解背后的原理.

### 4-11 mock设置

加载json文件, 请求数据



## Code log 

### 更换vue-cli版本



node -v  

npm -v 

webpack -v

vue --version / -V

vue install -g @vue/cli@3.6.3  



### vue-axios 拦截器

https://segmentfault.com/a/1190000016787376

//请求发送拦截，把数据发送给后台之前做些什么......  
axios.interceptors.request.use((request) => {

### vue单文件, 为什么data 是个函数 , 需要返回数据对象

  data() {
    return { 
      res: {}
    }
  },

### vue eslint 报变量未使用 错误.





## 5

### 5-1 nav-header组件










