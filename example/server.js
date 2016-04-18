var express = require('express');
var WXeasy = require('node-wxeasy');
var bodyparser = require('body-parser')
var app = express();


//解析body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));



// 配置参数
var weixin = new WXeasy({
    app: app,
    appid: '',
    appsecret: '',
    token: 'appwechat',
    access_token_apiurl: ''
});

weixin.on('textMsg', function(data) {
	console.log(JSON.stringify(data));
	
    var msg = {
        toUserName : data.fromUserName,
        fromUserName : data.toUserName,
        msgType : 'text',
        content : data.content
    };
});

app.listen(18080);
