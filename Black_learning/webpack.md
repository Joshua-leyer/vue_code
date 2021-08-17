npm init -y  -> 得到 package.json包管理文件.

npm i [] -D  / -S 

-S 简写: --save
-D  --save-dev

-S 包的记录会在 "dependencies" 对象下, -D 会在 devDependencies 对象下

dependencies 是项目开发阶段和最终上线 都需要被用到的, 记录在这里.

devDependencies 只在开发阶段被用到的, 记录在这里. 

eg : npm install webpack@5.42.1 webpack-cli@4.72 -D


根目录创建 wabpack.config.js
```js
module.exports = {
    mode: 'development'  // 指定构建模式,  development 和 production 
}
```

package.json 的 scripts 对象下 add  "dev" 对象

```js
"scripts": {
    "dev": "webpack"    //  通过npm run dev 就可以运行指定的脚本的名字 
}
```

#### 指定webpack entry 和 output

webpack 4.x 5.x 默认的入口文件: src/index.js , 输出文件是 dist/main.js

```js
const path = require('path')
//   变量名字都很好理解
module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(_dirname, './dist'),
        filename: 'bundle.js'
    }
}

```

#### webpack-dev-server

热启动 webpack 打包用的, 日常操作

你敢信Joshua是看vue的教程, 里面顺带的讲 webpack 时候才理解 webpack 

Node 的出现才给了前端从后端中脱离出来的可能.  (这里是慕课网的vue3 + ts 仿知乎的实战课里面讲的, Joshua最开始不能理解,npm 和 webpack的关系, 扯淡吧. 就是, 很少有教程能按照事物发展顺序讲知识)

```js
"scripts": {
    "dev": "webpack serve",   //  相当于自动自动了一个服务器
}
```

前端的文件引入资源的时候是 "/" 在根目录开始的, 不过是在内存中, 所以资源管理器看不到



#### html-webpack-plugin

原来是每次打开端口后, 只是在根目录, 没有进入src 的html文件,  这个插件可以从src中复制 html文件到指定的地方.
同时也会添加/修改script引入的文件.bundle.js

然后 打开端口后就能自动进入html文件了.


```js
const HtmlPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',    // 原文件存放的位置   原位置
    filename: './index.html',        // 指定生成的文件放的位置   目的位置
})

module.exports = {
    mode: 'development',
    plugins: [htmlPlugin], // webpack 提供的 plugins对象下 添加插件
}

```

#### webpack 中的 devServer 对象


```js


module.exports = {
    mode: 'development',
    
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80,
    }
}

```

#### webpack loader 加载器

 
导入css 样式

import './css/index.css'

npm i style-loader@3.0.0 css-loader@5.2.6 -D

webpack.config.js  module => rules数组添加loader规则:

```js
module.exports = {
    mode: 'development',

    module: { // 所有第三方模块的匹配规则
        rules: [   // 利用文件后缀来分配 loeader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }  // test表示匹配的文件类型, use表示对应调用的loader
        ]
    }
}
```

#### 解析处理less 文件

npm i less-loader@10.0.1 less@4.1.1 -D

```js

module: { // 所有第三方模块的匹配规则
    rules: [   // 利用文件后缀来分配 loeader
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
    ]
}

```

!!! base64格式的图片优缺点. 


#### webpack  loader图片

```js

import logo from './images/logo.jpg'

$('#img-box').attr('src', logo)


```

```js

npm i url-loader@4.1.1 file-loader@6.2.0 -D

module.exports = {
    rules: [
        { test: /\.jpg|png|gif$/, use: 'url-loader?limit-22229' }  // limit 限制大小, 是否转成base64
    ]
}
```

!!! webpack 处理js高级语法

babel-loader 包

```js

{
    test : /\.js$/, use: 'babel-loader', exclude: /node_modules/ 
}

```

#### build命令

```js
"scripts": {
    "dev": "webpack serve",                // 开发过程中运行 dev 命令
    "build": "webpack -mode production"    // 项目发布时, 运行的 build 命令  , 原理就是执行命令时候附带参数 覆盖mode 参数 
}
```

!!! 优化js ,image 存放位置


```js

js

output: {
    path: path.join(_dirname, 'dist'),
    filename: 'js/bundle.js',
}



图片

{
    test: /\.jpg|png|gif$/,
    use: {
        loader: 'url-loader',
        options: {
            limit: 22228,
            outputPath: 'image',   // dist/image 下面
        }
    }
}

```

#### Source Map 

信息文件, 存放着位置信息, 报错后可以直接定位到元时代吗的位置, 而不是打包后的位置, 

Debug用   , 不需要下载


```js

module.exports = {
    mde: 'development',
    devtool: 'eval-source-map',
}

```


#### @ 原理

webpack.config.js

```js

resolve: {
    alias: {
        '@': path.join(__dirname, './src/')
    }
}


```



