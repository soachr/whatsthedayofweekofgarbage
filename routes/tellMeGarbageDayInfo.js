var express = require('express');
var router = express.Router();


/* サンプルAPI② 
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', function(req, res, next) {
  var today = new Date();
  var dayOfWeek = today.getDay();

  switch(dayOfWeek) {
    case 0:
      var param = {"result":"ゴミ出しはない。ゆっくりすごすんやで。"};
      break;
    case 1:
      var param = {"result":"月曜日やからペットボトルと瓶と缶をだすんやで"};
      break;
    case 6:
      var param = {"result":"土曜日やから燃えるゴミ、絶対だすんやでくさなるし"};
      break;
    default:
      var param = {"result":"except Sun."};
  }

  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

module.exports = router;



