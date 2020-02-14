exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.jwt = {
  enable: true,
  package: "egg-jwt"
};

exports.cors =  {
  enable: true,
  package: 'egg-cors',
};



// module.exports = plugins => {
//   const plugins = (exports = {});
  
//   plugins.mysql = {
//     enable: true,
//     package: 'egg-mysql',
//   };

//   plugins.jwt = {
//     enable: true,
//     package: 'egg-jwt',
//   };

//   plugins.cors =  {
//     enable: true,
//     package: 'egg-cors',
//   }

//   return {
//     ...plugins
//   }
// };

