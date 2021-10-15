Ext.define("appTesting.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  addTab: function () {
    var tabs = this.lookupReference("mT");
    var tab = tabs.add({
      title: "Товары",
      xtype: "content",
    });
    tabs.setActiveTab(tab);
  },

  onLogoutClick: function () {
    localStorage.removeItem("LoggedIn");

    this.getView().destroy();

    Ext.create({
      xtype: "login",
    });
  },
});
