Ext.define("appTesting.view.main.Tab", {
  extend: "Ext.tab.Panel",
  xtype: "mainTab",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "appTesting.view.main.MainController",
    "appTesting.view.main.MainModel",
    "appTesting.view.main.List",
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

  buttons: [
    {
      text: "Logout",
      formBind: true,
      listeners: {
        click: "onLogoutClick",
      },
    },
  ],

  items: [
    {
      title: "Home",
      iconCls: "fa-home",
      // The following grid shares a store with the classic version's grid as well!
      items: [
        {
          xtype: "mainlist",
        },
      ],
    },
    {
      title: "Users",
      iconCls: "fa-user",
      bind: {
        html: "{loremIpsum}",
      },
    },
    {
      title: "Groups",
      iconCls: "fa-users",
      bind: {
        html: "{loremIpsum}",
      },
    },
    {
      title: "Settings",
      iconCls: "fa-cog",
      bind: {
        html: "{loremIpsum}",
      },
    },
  ],
});
