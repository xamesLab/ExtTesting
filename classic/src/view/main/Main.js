Ext.define("appTesting.view.main.Main", {
  extend: "Ext.panel.Panel",
  xtype: "app-main",

  plugins: "viewport",

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

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "Учет товаров",
      },
      flex: 0,
    },

    items: [
      {
        xtype: "button",
        text: "Товары",
        padding: "3px",
        margin: "2px 5px 2px 2px",
        listeners: {
          click: "addTab",
        },
      },
      {
        xtype: "button",
        text: "Выход",
        padding: "3px",
        margin: "2px 5px 2px 2px",
        listeners: {
          click: "onLogoutClick",
        },
      },
    ],
  },

  items: [
    {
      xtype: "multiTab",
      reference: "mT",
    },
  ],
});
