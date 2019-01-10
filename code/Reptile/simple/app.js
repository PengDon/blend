const async = require('async');
const video = require('./video');
const save = require('./save');
const url = 'http://www.imooc.com/learn/857';
let videolist;

async.series([
        //获取视频信息
        function(done){
            video.videocrawler(url,function(err,list){
                videolist = list;
                done(err);
            });
        },
        //保存视频信息
        function(done){
            save.videoSave(videolist,done);
        },

    ],function(err){
    if(err){
        console.log(err);
    }
    console.log('完成');
    process.exit(0);
})