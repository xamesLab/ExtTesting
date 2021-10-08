Ext.define("appTesting.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  plugins: "viewport",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "appTesting.view.main.MainController",
    "appTesting.view.main.MainModel",
    "appTesting.view.main.List",
    "appTesting.view.main.Tab",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

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
        text: "Выход",
        padding: "3px",
        margin: "2px 5px 2px 2px",
        listeners: {
          click: "onLogoutClick",
        },
      },
    ],
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  items: [
    {
      xtype: "mainTab",
    },
  ],

  // items: [
  //   {
  //     title: "Home",
  //     iconCls: "fa-home",
  //     // The following grid shares a store with the classic version's grid as well!
  //     items: [
  //       {
  //         xtype: "mainlist",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Users",
  //     iconCls: "fa-user",
  //     bind: {
  //       html: "{loremIpsum}",
  //     },
  //   },
  //   {
  //     title: "Groups",
  //     iconCls: "fa-users",
  //     bind: {
  //       html: "{loremIpsum}",
  //     },
  //   },
  //   {
  //     title: "Settings",
  //     iconCls: "fa-cog",
  //     bind: {
  //       html: "{loremIpsum}",
  //     },
  //   },
  // ],
});
