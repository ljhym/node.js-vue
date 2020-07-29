var express = require("express");
var app = express();

// 跨域
const cors = require('cors')
app.use(cors())

app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})
// 跨域


app.use("/", express.static(__dirname + "/public"));

app.get('/root', function (req, res) {
    console.log(req)
    res.send('1234')
})

app.get('/menus', function (req, res) {
    console.log(req)
    res.send('1234')
})

app.listen(3000);
console.log('http://127.0.0.1:3000/')
