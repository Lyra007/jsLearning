const https = require('https');
var appId = 'wxcacb4f6130a55c76';
var appSecret = 'd4624c36b6795d1d99dcf0547af5443d';
var targetURL = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appId+
'&secret='+appSecret;

function getURL(type, accessToken, openId) {
  switch (type) {
    case 'list':
      var listURL = 'https://api.weixin.qq.com/cgi-bin/user/get?access_token='+accessToken;
      return listURL;
    case 'user':
      var userInfo = 'https://api.weixin.qq.com/cgi-bin/user/info?access_token='+accessToken+'&openid='+openId+'&lang=zh_CN';
      return userInfo;
  }

}

https.get(targetURL, function(response) {
  var chunks = [];
  response.on('data', function (res) {
    var apiRes = JSON.parse(res);
    // console.log(apiRes.access_token);
    accessToken = apiRes.access_token;
    console.log(accessToken);
    var listURL = getURL('list', accessToken)
    https.get(listURL, function(response) {
      response.on('data', function (listRes) {
        var liRes = JSON.parse(listRes);
        var weData = liRes.data;
        chunks = weData['openid'];
        console.log(chunks);
      });
    });
  });
});



console.log('Server running at http://127.0.0.1:8888/');
