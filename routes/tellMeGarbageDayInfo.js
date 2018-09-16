var express = require('express');
var moment = require('moment');
var router = express.Router();


router.get('/', function(req, res, next) {
  var today = new Date();
  var dayOfWeek = today.getDay();
  var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] ;
  var todayMoment = moment(today);

  var param = {
      "uid": "00000001",
      "updateDate": todayMoment.format('YYYY-MM-DD[T]HH:mm:ss[.0Z]'),
      };

  if(10 < today.getHours()) {
      message = "後の祭りや";
      param.titleText = message;
      param.mainText = message;
  } else {
    switch(dayOfWeekStr) {
      case "月":
        message = dayOfWeekStr + "曜日やから、ペットボトルと瓶と缶をだすんやで。";
        param.titleText = message;
        param.mainText = message;
        break;
      case "火":
        message = dayOfWeekStr + "曜日やから、ダンボールをだすんやで。";
        param.titleText = message;
        param.mainText = message;
        break;
      case "水":
      case "土":
        message = dayOfWeekStr + "曜日やから、燃えるゴミ、燃えるゴミやで。絶対だすんやで。";
        param.titleText = message;
        param.mainText = message;
        break;
      default:
        message = dayOfWeekStr + "ゴミ出しはない。ゆっくりすごすんやで。";
        param.titleText = message;
        param.mainText = message;
    }
  }

  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

module.exports = router;



