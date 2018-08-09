var path=require('path');
var webpackConfig={};

webpackConfig.enter='app.js';

webpackConfig.output={
    path:'./dist',
    filename:[name].js
}
webpackConfig.module={
     loaders:[
         {
             test:/\.js?$/,
             loader:'babel'
         }
     ]
}
