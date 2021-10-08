Ext.define("TutorialApp.view.login.LoginController", {
  extend: "Ext.app.ViewController",
  alias: "controller.login",

  onLoginClick: function () {
    localStorage.setItem("LoggedIn", true);

    this.getView().destroy();

    Ext.create({
      xtype: "app-main",
    });
  },
});
