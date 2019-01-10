const request = require('request');
const cheerio = require('cheerio');

exports.videocrawler = function (url, callback) {
  request(url, function (err, res) {
    if (err) {
      callback(err);
    }

    let $ = cheerio.load(res.body.toString());

    let videoList = [];

    $('.video li a').each(function () {
      let $title = $(this).parent().parent().parent().text().trim();
      let title = $title.split('\n');
      let text = $(this).text().trim();
      text = text.split('\n');
      //console.log(text);
      let time = text[1].match(/\((\d+\:\d+)\)/);
      let item = {
        title: title[0],
        url: 'http://www.imooc.com' + $(this).attr('href'),
        name: text[0],
        duration: time[1]
      };
      let s = item.url.match(/video\/(\d+)/);
      //console.log(s);
      if (Array.isArray(s)) {
        item.id = s[1];
        videoList.push(item);
      }
    });

    callback(null, videoList);
  });
}