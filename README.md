# vue2.0-startWorkQuickly
快速搭建配置vue2.0内容，更多时间专注业务开发。

## 创建脚手架
    vue init webpack projectname

## 安装依赖
    cd projectname
    npm i
    
## 启动服务
    npm run dev
    
## 安装其他
    npm install vuex vue-resource n-zepto stylus stylus-loader css-loader -S

## 重新启动服务
    npm run dev
    
## 增加路径
    进入webpack.base.conf.js文件新增common路径：
    'common': resolve('src/common')
    
## 添加文件，覆盖内容
    common/目录文件
    vuex/目录文件
    components/目录文件
    router/index.js 覆盖
    main.js覆盖
    App.vue 覆盖
    
## 重新启动服务
    检测是否正常工作
