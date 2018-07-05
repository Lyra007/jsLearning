var express = require('express');
var router = express.Router();

var OAuth = require('wechat-oauth');
var client = new OAuth('wxcacb4f6130a55c76', 'd4624c36b6795d1d99dcf0547af5443d');

router.get('/', function (req, res, next) {
  var domain = "localhost:8080"
  var auth_call_backurl = domain +"/oauth/callback"
  var url = client.getAuthorizeURL(auth_call_backurl, '', 'snsapi_userinfo');
  console.log(url);
  //重定向请求到微信服务器
  res.redirect(url);
});

router.get('/callback', function (req, res, next) {
  var code = req.query.code;
  client.getAccessToken(code, function(err, result) {
    console.log(result);
    var accessToken = result
  })
})
