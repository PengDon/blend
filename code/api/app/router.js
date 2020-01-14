module.exports = app => {
  require("./routers/login")(app);
  require("./routers/home")(app);
  require("./routers/users")(app);
};
