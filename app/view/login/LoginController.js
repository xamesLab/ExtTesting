Ext.define("appTesting.view.login.LoginController", {
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
      Ext.Msg.alert("Ошибка", "Неправильный логин/пароль", Ext.emptyFn);

      login.setValue("");
      pass.setValue("");
    }
  },
});
