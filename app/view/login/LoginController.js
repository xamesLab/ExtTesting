Ext.define("TutorialApp.view.login.LoginController", {
  extend: "Ext.app.ViewController",
  alias: "controller.login",

  onLoginClick: function (el) {
    var login = el.up("form").items.get(0);
    var pass = el.up("form").items.get(1);

    // Временная валидация. TODO: валидация на DB
    if (login.value === "admin" && pass.value === "padmin") {
      localStorage.setItem("LoggedIn", true);

      this.getView().destroy();

      Ext.create({
        xtype: "app-main",
      });
    } else {
      alert("Неправильный логин/пароль");

      login.setValue("");
      pass.setValue("");
    }
  },
});
