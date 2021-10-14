Ext.define("appTesting.view.main.Tabs", {
  extend: "Ext.tab.Panel",
  xtype: "multiTab",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "appTesting.view.main.MainController",
    "appTesting.view.main.MainModel",
    "appTesting.view.main.Grid",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",

  titleRotation: 0,
  tabRotation: 0,

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  items: [
    {
      title: "Товары",
      xtype: "content",
    },
  ],
});
