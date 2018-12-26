const fs = require('fs');
// 写法一
let files = fs.readdirSync('code/api/app/route/');
console.log(files);
// 写法二
fs.readdir('code/api/app/route/',(err,files)=>{
    console.log(files)
})
