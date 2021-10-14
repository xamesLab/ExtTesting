Ext.define("appTesting.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },

  addTab: function () {
    var tabs = this.lookupReference("mT");
    var tab = tabs.add({
      title: "Товары",
      xtype: "content",
    });
    tabs.setActiveTab(tab);
  },

  onLogoutClick: function () {
    // Remove the localStorage key/value
    localStorage.removeItem("LoggedIn");

    // Remove Main View
    this.getView().destroy();

    // Add the Login Window
    Ext.create({
      xtype: "login",
    });
  },
});
