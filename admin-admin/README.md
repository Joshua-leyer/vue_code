# admin-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




admin-admin/ 是前端vue项目

admin-admin/server  由于后端就是一个单index.js文件就能写完.都放这里了



### Q_A

前端通过axios发送请求 , .then()回调函数中没有使用res参数,导致报错. 

```js
项目的文件夹下有 .eslintrc.js > 在 rules 对象下面添加

"no-unused-vars": 'off'

eg:
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-unused-vars": 'off'
  }
```


