

# day 1  => webpack.md


# day 2

vue特性

基础指令

事件绑定, 修饰符等


### 过滤器, 一个函数 通常用于文本的格式化,  在差值表达式中 , v-bind属性绑定里面使用.

```js
<p> {{ message | capitalize }} </p>

<div v-bind:id="rawId | formatId"></div>

filters: {
    // 注意：过滤器函数形参中的 val，永远都是“管道符”前面的那个值
    capi(val) {
        // 字符串有 charAt 方法，这个方法接收索引值，表示从字符串中把索引对应的字符，获取出来
        // val.charAt(0)
        const first = val.charAt(0).toUpperCase()
        // 字符串的 slice 方法，可以截取字符串，从指定索引往后截取
        const other = val.slice(1)
        // 强调：过滤器中，一定要有一个返回值
        return first + other
    }
}


```

### 私有过滤器, 全局过滤器.


```js
// 使用 Vue.filter() 定义全局过滤器
Vue.filter('capi', function (str) {
    const first = str.charAt(0).toUpperCase()
    const other = str.slice(1)
    return first + other + '~~~'
})

```
### 多个管道


串联使用多个过滤器

{{ message | filterA | filterB }}   以此从左到右得到最终结果显示.


传递参数

```js

<p>{{ message | filterA(arg1, arg2) }} </p>

Vue.filter('filterA', (msg, arg1, arg2) => {  // 第一个参数是固定的.
    // 处理逻辑
})

```

# day 3

### 侦听器  pdf

### 计算属性


### axios

### vue-cli 使用


### 组件

# day 4

pdf 在 day 3里面

使用组件的3个步骤  -> demo1

vscode 插件 : pathauto complate

在setting.js :

```js
    // 配置vue 路径
    "path-ahtocomplete.extensionOnImport": true,
    "path-autocomplete.pathMappings":{
        "@":"${folder}/src"
    },
```


### 私有组件, 全局组件. 

### 组件 props 属性

day4 / demo-1

组件自定义属性, 提高复用性.   见 demo-1 Count.vue 和 Left.vue组件 使用情况.

```js

<MyCount init="9" @click="show"></MyCount>

MyCount.vue:

<p> {{ init }}</p>

export default {
    // props: ['init'],   // 数组格式的props 
    props: {       // 对象格式的props
        init: {
            default: 0,
            type: Number,
            required: true
        }
    }
    data() {
        return {
            count: this.init   // 通过 props 转给data中的count数据, 来中转一下,避免直接修改props内的内容
        }
    },
    methods: {
        show() {
            console.log(this)   // 这里看, 可以发现 实例化的对象, 下props和data里面的变量数据是在同一个环境当中的, 同一级别.
        }
    }
}


```

！！ 不建议直接修改props 里面的变量数据 , 



### 组件之间的样式冲突问题,  scope, 原理是添加唯一的自定义属性区分

scope 有缺陷,   见demo-1 Left.vue组件的样式部分.

!! scoped以后 样式失效的原因, https://blog.csdn.net/qq_41800366/article/details/107062781

总结： 为什么vue组件中添加scoped后某些样式不生效？
原因： vue的scoped为本组件的所有标签都打上了一个唯一attribute，样式生效时也带上了这唯一的attribute，但是本组件应用的所有子组件，除根标签以为其他都未打上这唯一标签，因此样式自然不会生效。

意思就是父组件来修改子组件的样式是不行的, 需要用deep

### /deep/ 样式渗透


### 组件的生命周期

大体分创建, 挂载, 销毁. 前后 6个   

见day3 / pdf文件


### 组件之间的数据共享

day 4 / demo-2

父 -> 子 :  props传递

<Left :msg="message" :user="userinfo"></Left>

子 -> 父 :  自定义事件的方式.

开始是 子组件 this.$emit 触发一个事件, 并传递参数. 父组件在使用子组件时候 @绑定上一个事件.


```js
子组件

methods: {
add() {
    // 让子组件的 count 值自增 +1
    this.count += 1
    // 把自增的结果，传给父组件
    this.$emit('numchange', this.count)
}
}

```


```js
父组件

类似父组件@监听一个事件, 触发对应的函数, 然后拿到传递过来的参数

<Right @numchange="getNewCount"></Right>



methods: {
// 获取子组件传递过来的数据
getNewCount(val) {
    console.log('numchange 事件被触发了！', val)
    this.countFromSon = val
}
},

```

兄弟组件 数据共享方案 EventBus.

EventBus.js

```js
import bus from './eventBus.js'

methods: {
    data() {
        return {
            msg: 'joshua hello ',
        }
    },
    sendMsg() {
        bus.$emit('share', this.msg)
    }
}

// EventBus.js 
import Vue from 'vue';

export default new Vue()


// 接收 方, $on 是监听作用.

export default {
    data() {
        return {
            msgFromOther: ''
        }
    },
    created() {
        // 监听, 
        bus.$on('share', val => {
            this.msgFromOther = val
        })
    }
}
```

# day 5 

父组件给子组件传递数据 ,  自定义属性 的方式传进去,

子组件给父组件, this.$emit() 触发器触发事件上去.

兄弟组件, EventBus.js

### ref 获取DOM

day 5 demo-1 

每一个vue实例上, 都包含一个$refs对象, 里面存储着对应的DOM元素或组件的引用, 默认情况下, 组件的 $refs 指向一个空对象

    <h1 ref="myh12">App 根组件</h1>

vue实例下会有 $refs 对象, 会在对象下添加一个{myh12: h1}  myh12对应着一个h1DOM元素

this.$ref可以获取dom 也可以获取一个vue实例(也就是vue组件)

关于$ref 获取元素, 并对dom修改内容的一个知识点
```js

https://cn.vuejs.org/v2/api/index.html#Vue-nextTick


// 点击按钮，展示输入框
showInput() {
    // 1. 切换布尔值，把文本框展示出来
    this.inputVisible = true
    // 2. 让展示出来的文本框，自动获取焦点
    this.$nextTick(() => {      / 理解成一个延迟函数
    this.$refs.iptRef.focus()   // 上面的数据修改了, 但是页面还没有渲染, 这时候拿到input元素, 是拿不到的. 
    })
},

```


### Array some、every、reduce方法


### 购物车案例

写vue 学生命周期的时候, 有一个觉得挺重要的东西就是, 数据改变的时候页面会自动渲染.
这直接影响到后续写代码去怎么实现功能.


```js

import axios from 'axios'
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

const { data: res } = await this.$axios.get('https://www.escook.cn/api/cart')

```

父子孙, 三层组件传值的方法 .这个案例应该敲一敲


# day 6 

+ 动态组件 & 插槽 & 自定义指令

通过使用保留的 <component> 元素，动态地绑定到它的 is 特性，可以实现动态组件



```js
<component> 用来实现动态组件的渲染

<component :is="comName"></component>

通过修改is的变量值 comName 来动态改变组件的. 

console.log(this.$options.name)   // 获取当前组件的 自定义的 name 属性
```

这样是直接把组件销毁了, 

### keep-alive 

day 6/code/demo-1

```js
<keep-alive>
  <component :is="comName"></component>
</keep-alive>

<keep-alive include="Left, Right">
  <component :is="comName"></component>
</keep-alive>

<keep-alive exclude="MyRight">   // 除了name: MyRight的组件,其他组件都不会被销毁
  <component :is="comName"></component>
</keep-alive>
```

被缓存的组件 会触发 deactivated 生命周期函数,  
被激活的组件,会触发 activated 生命周期函数.  必须是在keep-alive标签内部的组件才能有的

keep-alive 的 include,和exclude 属性

为什么 Vue 组件需要一个 name : https://lazzzis.moe/post/name-attribute-in-vue-component/

### Slot

为封装组件者提供的. 

```js
v-slot:Left 这样可以指定那些标签是插入到 Left组件中的插槽内的

App.vue :

<Left>
  <!-- 默认情况下，在使用组件的时候，提供的内容都会被填充到名字为 default 的插槽之中 -->
  <!-- 1. 如果要把内容填充到指定名称的插槽中，需要使用 v-slot: 这个指令 -->
  <!-- 2. v-slot: 后面要跟上插槽的名字 -->
  <!-- 3. v-slot: 指令不能直接用在元素身上，必须用在 template 标签上 -->
  <!-- 4. template 这个标签，它是一个虚拟的标签，只起到包裹性质的作用，但是，不会被渲染为任何实质性的 html 元素 -->
  <!-- 5. v-slot: 指令的简写形式是 # -->
  <template #default>
    <p>这是在 Left 组件的内容区域，声明的 p 标签</p>
  </template>
</Left>

Left.vue 组件 :

<slot name="default">
  <h6>这是 default 插槽的后备内容</h6>    // 这里的标签, 如果父元素使用的时候没有给插槽传递标签就用这个后备的内容.
</slot>

```

#### # 作用域插槽

插槽有名字, 有变量传递的就可以算是作用域插槽


```html
<template #content="{ msg, user }">
  <div>
    <p>啊，大海，全是水。</p>
    <p>啊，蜈蚣，全是腿。</p>
    <p>啊，辣椒，净辣嘴。</p>
    <p>{{ msg }}</p>
    <p>{{ user.name }}</p>
  </div>
</template>

<slot name="content" msg="hello vue.js" :user="userinfo"></slot>

```


#### 自定义指令

day 6 /demo-2 插槽


自定义私有指令, 全局指令.



```vue 
实例根节点

// 私有自定义指令的节点
directives: {
  // 定义名为 color 的指令，指向一个配置对象

  /* color: {
    // 当指令 第一次 被绑定到元素上的时候，会立即触发 bind 函数    !! bind是固定的
    // 形参中的 el 表示当前指令所绑定到的那个 DOM 对象
    bind(el, binding) {
      console.log('触发了 v-color 的 bind 函数')
      el.style.color = binding.value
    },
    // 在 DOM 更新的时候，会触发 update 函数
    update(el, binding) {
      console.log('触发了 v-color 的 update 函数')
      el.style.color = binding.value
    }
  } */

  // 如果bind和update函数中的逻辑相同, 则对象格式的自定义指令可以简写成如下格式
  color(el, binding) {
    el.style.color = binding.value
  }
}

```
全局自定义指令

```js
// 全局自定义指令

Vue.directive('color', {
  bind(el, binding) {
    el.style.color = binding.value
  },
  update(el, binding) {
    el.style.color = binding.value
  }
}) 

Vue.directive('color', function(el, binding) {
  el.style.color = binding.value
})

```

### eslint 

这里最开始我没搞懂, 搞得很费劲. 这跟vue-cli 和webpack 的发展关系的原因, 导致网页上搜索到的文章太恶心.

webpack 的配置eslint是要自己创建文件夹. 而且可以选择是不是内置在webpack.config.js里面

所以vue-cli 创建的文件也有两种, 一种是在.eslintrc.js 里面还有是内置在package.json里面. 

我靠,没人告诉我, 我怎么知道会跑到package.json里面。害的我好久都不明白

这些选择都是在创建项目的时候会让你选择的. 最开始我不知道. 教程也不讲. 气死


### axios挂载到全局上


# day 7 

/code/ Router-demo-1 app.vue 有vue-router的简单实现原理.

app2.vue  是router的简单使用

hash地址和组件的对应关系, 这里搜一搜hash地址相关的历史背景知识比较好.

监听onhashchange(){}  事件.   浏览器提供的.


npm i vue-router 

src / 下新建 router/index.js

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter()


export default router


main.js : 

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')



<router-link to="/home">home</router-link>

<hr />

<router-view></router-view>


+ 重定向

{path: '/', redirect: '/home'}


```

#### 嵌套路由

router-demo1 About.vue

```js

{
  path: '/about',
  component: About,
  // redirect: '/about/tab1',
  children: [
    // 子路由规则
    // 默认子路由：如果 children 数组中，某个路由规则的 path 值为空字符串，则这条路由规则，叫做“默认子路由”
    { path: '', component: Tab1 },
    { path: 'tab2', component: Tab2 }
  ]
},


```

#### 动态路由

router-demo1 Movie.vue组件

```js

{ path: '/movie/:id', component: Movie }     // id是随便取的. 

this.$route 是路由的 "参数对象"
this.$router 是路由的 "导航参数"

```

拿到route 的路由相关参数 . this.$route 里面拿

另一种方法
```js
path: '/movie/1'   这种属于路径后面, 路径参数   要从, this.$route.params 里面拿


{ path: '/movie/:id', component: Movie, props: true},

Movie.vue 

props: ['id']  可以接收拿到

```

```js 
这种的是 查询参数

<router-link to="/movie/3?name=a&age=12"> ?参数</router-link>

this.$route.query 里面拿

```

#### router 的导航常用方式

声明式导航, 编程式导航    详见 pdf  和 movie.vue组件

```js

this.$router.push('hash 地址')  // 会增加一条 历史记录

this.$router.replace('hash地址')   // 会替换掉当前的历史记录

this.$router.go('数值')   //  不太喜欢这个. 

this.$router.back()
this.$router.forward()


```


#### 路由守卫

访问权限

全局守卫

```js
const router = new VueRouter({})

router.beforeEach(fn)

```


#### 案例

巩固知识.

!!! 一点小技巧
```js
router.beforeEach((to, from, next) => {
    const pathArr = ['/admin', '/admin/users', '/admin/rights']

    if (pathArr.indexOf(to.path) !== -1) {   // 在数组里面
        let joshua = localStorage.getItem('joshua')
        if (!joshua) next('/login')
    }

    next()
})

```

