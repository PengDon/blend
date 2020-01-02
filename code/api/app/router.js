module.exports = app => {
  require("./routers/home")(app);
  require("./routers/users")(app);
};
