

/code-资料 ，按章节分学习笔记。


### Learn Log

! 这门课就是 慕课前端体系课的 vue的部分稍微拓展了一点。 

前 6 章节的内容是 vue 基础知识；直接从第七章开始

__版本问题真的很恶心人__

采取的学习方式是：跟着看视频，把对应的代码存放到 commit 分章节提交。主要采取把课程的资料代码拿出来看即可 

! 有个不好的消息就是 joshua 学习的时候 发现vue-cli官网已经不维护了，而是推荐使用 另一个脚手架

一般情况，用什么脚手架生成的项目，那么项目中的自动配置的文件分别什么功能，这个需要到官网去查了。

学习者的环境版本通常比教程的高，通常学习的时候很多时候都是在解决 使用某个库的时候，因为版本引发的。这很恶心。

主要学习 思路，具体的 CSS 等布局样式不做主要学习内容

另joshua比较痛苦的是，自己并不理解这写配置选项内容都是什么作用。当出现问题的时候，根本不知道该干什么，怎么定位。如果是vue内容中的还好。但是 项目配置，教程根本不会多讲。


## 七章 

- 学习对 vue-cli 的使用
  - history路由和hash路由区别
- 对单文件应用开发方式的了解
- vue-Router 的理解
    <router-view/> 
    - vue-Router 监听的 路径，现实对应的组件的时候，相当于放在这个标签的地方被显示出来，负责展示当前路由对应的组件内容
    - 异步加载组件
- vueX的 语法
    感觉 vueX 还是比较繁琐的。
    见 7-04文件代码.
- vue2的选项式 开发 和 vue3 的 compositionAPI 方式开发的区别
    - 主要感觉就是被包裹的样式变了，其核心操作没有什么太大变化
- axios 的使用 

## 八章

- 基础 css 样式配置
    - npm i normalize.css
- 使用 iconfont
    阿里的资源下载下来以后 例如在线的 会得到一个 iconfont.css 文件，
    入口 main.js 引入 index.scss 其中引入
    >@import './base.scss';
    @import './iconfont.css';
- 学习统一 CSS 变量颜色的学习
    viriables.scss 中定义变量，在其他文件引入，使用。
- 单页面 CSS设置局部作用域
    scoped ，可以限制当前vue样式只作用在当前页面，但是，组件CSS属性，有继承仍然会继承。
    例如： 子组件中想通过.父组件的某个类  是无效的。

## 九章 登录功能开发

- 路由守卫实现登录校验功能
  在 router 挂载一个全局路由守卫函数 beforeEach()， 就是说当使用vue-router提供的方式跳转任何页面的时候都会提前执行以下这个函数
  是否登录信息，存放到 localStorage 中
  9-2/ > router/index.js > routes/beforeEnter() 直接把路由守卫放到某个特定的路由下，就是当页面从这个页面跳出去或者跳转到另一个页面触发的函数。
    这个可以用来做，排斥动作，比如进入页面之前判断是否有isLogin 属性，如果有则自动跳转到 home 页面
    - 衍生学习，vue-router 路由守卫
    - vue-router 跳转页面的方式，*函数方式*
- 使用 axois 发送http请求
    9-04/ > login.vue
    - 学习 Promise 等异步请求相关知识点。
  - 封装请求函数
    /utils/request.js
  - __学习掌握 http 请求头的各个字段的函数，以及 axios 发送请求的时候如何设置 Content-Type 字段的值。__
  
- Toast 弹窗式组件的开发
- Setup函数的职责
    /login.vue
  - 复习 reactive，toRefs 功能

！ 如果，只是看过vue基础知识，其实第一次看基础知识，顶多就是把东西过一遍，并不能真的理解其中很多东西的含义，怎么使用。
到这里实战使用的时候，会有吃力的感觉。 
很多时候学习，并不是那么的循循渐进，知识点和知识点的衔接，并不能得到保证。尤其是自学的时候，这种问题经常遇到。 令人头大。

## 十章 商品功能开发 上
- 10-1 /vuew/home/Nearby.vue 附近页面使用 axios 请求数据
  - utils/request.js 重新封装 axios 
  - 学习代码技巧
    ```js
      if(result?.errno === 0 && result?.data?.length)
    ```
  - 把请求代码封装成一个函数，eg: useNearbyListEffect() 内容简单整理，返回请求内容。
- 10-2 商家详情页面
  - 简单复习登录拦截验证
  - Nearby.vue 使用 components/Shopinfo.vue组件，
  - 不同组件使用 shopInfo.vue 商品card组件，显示不同 class 样式的写法
    - 父组件传递 一个属性给子组件 ，子组件通过 props 接收到这个变量。最后页面判断该变量的值
      ```js
          <ShopInfo :item="item" :hideBorder="true" />
      ```
- 10-4 /shop.vue 商品详情页面 ，搜索布局及路由跳转
  - 学习Nearby.vue 循环使用 ShopInfo 组件，并传递不同的属性给子组件
    注意循环的是 router-link 而不是 ShopInfo 组件，
- 10-6 路由跳转携带参数 & shop.vue 商家页面使用 axios 请求
  ```js
  /Nearby.vue
  :to="`/shop/${item._id}`"

  ---------------------
  /router.js
  path: '/shop/:id',
      name: 'Shop',
      component: () => import()

  ```
  - Shop.vue 中数据保存到对象下，为了让vue能够监听到某个数据，实现及时响应的功能。需要用 reactive定义数据。 ! 顺带学习相关知识 (vue这一块有些恶心)

- __请求没有拿到数据的时候，图片会有一个时间段显示默认那个 img 小图标的情况__
  1. 可以在 reactive 定义数据的时候顺便传入默认数据.
    ```js
      /Shop.vue
      const data = reactive({ item: {
        imgUrl: ''
      } })

    ```
  2. 只有当 item.umgUrl 有数据的时候 v-show 判断出真 才会显示 dom ，也可以解决问题
    ```js
    <ShopInfo v-show="item.imgUrl"/>
    ```
- 10-8 shop/content.vue 商家页面  商品列表和左侧列表菜单的 样式 开发
- 10-12 shop/content.vue 商家详情页面分类及内容联动
  API 接口设计： /api/shop/:id/products?tab=all

  - 学习他这个 请求的发送方式，以及接口怎么封装的 
    code >>> Content.vue & utils/index.js

  - __学习点击当前列表，样式 active 的方式__
    ```js
    当前选中的 tab 和 名字相同的时候为真，使用 --active 类
    :class="{'category__item': true, 'category__item--active': currentTab === item.tab}"

    ```
- 10-13 shop/content.vue 使用 watchEffect 进行代码拆分
  - 深入学习 watch & watchEffect 的使用区别？
    - 衍生学习，什么样的代码要放入 watchEffect中，什么样的代码放入声明周期函数中，这是针对 vue 写代码的思维。觉得这个很重要。

## 十一章 商品功能开发 下

- 11-1 shop/Cart.vue | 购物车样式开发
- 11-2 /store/index.js & Content.vue | 购物车数据结构设计 使用 vuex 
  - 复习学习 vuex 的使用
- 11-4 computed 完成订单价格计算
  - 学着学着突然忘记了，为什么要在最下面返回出去 @click 要使用的函数
    vue2 中似乎只需要写到 methods 就可以了，
    感觉这个教程很多代码耦合度太高了。 见本章节的 Content.vue 

暂停一下----
我需要重新复习，一下 vue3