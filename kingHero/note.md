
## 

express^5.0.0 , express4 不支持捕获 async / await 的错误异常





## element menu router

https://segmentfault.com/a/1190000007810151


## 单文件vue , methods对象中的方法 this指向.

https://cn.vuejs.org/v2/guide/events.html

官网看到有案例, 但是背后没有太直观的感觉, 

## slot 槽概念

```html
<template slot-scope="scope">
    <el-button type="primary" round 
    @click="$router.push(`categories/edit/${scope.row._id}`)">编辑</el-button>
</template>

```


### vue  props用法

### mongoose ref字段

Mongoose中文文档-指南之填充（Populate）  https://itbilu.com/nodejs/npm/HkAKMTECm.html

https://segmentfault.com/a/1190000021151338


### mongoose find Query查询函数 有一个setOptions

https://mongoosejs.com/docs/api.html#query_Query-setOptions

这个方法只适用于find() Query查询方法.

写了这些东西, 发现文档都是给会用的人看的, 也就是根本上就具备开发能力的人. 啥都不会的,看文档都是扯淡
  

https://www.axios-http.cn/docs/interceptors



### http-assert 包

这里是捕获错误用的包, express ^4.17 版本不用用, 需要5版本 2021年7月24日 03:29:26 , joshua写的时候官网没有明确给出5版本,只是有个内侧版本. 所以, 姑且先不用这个了.

不过思路用法都是一样的, 有空学习一下 原始的捕获错误的思路是什么. 


### web/src/style.css 文件夹写法的学习

类似一种bootstrap的类规范的实现. 利用 scss 预处理器

## bug Log



### express捕获promise的异常问题

express : ^4.17
使用http-assert 提示关于捕获异常的错误 , 主要原因是express不能捕获promise的错误异常,似乎是这个原因.

`
UnhandledPromiseRejectionWarning: UnprocessableEntityError
`
在express github的官网, issus里面看到一个人评论, 他是使用express 5.0的测试版本没问题了. 操蛋. 不更新版本不知道有没有什么办法.
```
Hello @webshy I think this is more of a statement than a question. Please could you change the title and re-phrase a little bit so we can address this.

Thank you very much for taking the time to read my question
I used the Http-assert package and the express version was ^4.17.1.No exception was caught, error prompted.
A solution has been found using express version 5.0.0-alpha.7
```

???? ==> 最后升级express 用的5.0 , 不知道如果是捕获的话,怎么搞


### vue-swiper

npm install swiper vue-awesome-swiper --save


### 

```html
<router-link tag="div" to="/">首页</router-link>    
```



### vue-cli2 创建的项目 没有vue.config.js文件. 

ESLint可以整个在package.json里面. 操蛋

vue-cli 官网关于ESLint的描述真的少.

还有文章说 是这个文件, eslintrc.js  奶奶的前端更新太快了.  根本没有

https://segmentfault.com/a/1190000020005105

