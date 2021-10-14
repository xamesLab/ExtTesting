Ext.define("appTesting.view.main.Grid", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",

  requires: ["appTesting.store.Data"],

  store: {
    type: "data",
  },
  title: "Список товаров",

  columns: [
    {
      text: "Id",
      dataIndex: "id",
      width: 50,
    },
    {
      text: "Имя",
      dataIndex: "name",
      flex: 1,
    },
    {
      text: "Описание",
      dataIndex: "caption",
      flex: 1,
    },
    {
      text: "Цена",
      dataIndex: "price",
      flex: 1,
    },
    {
      text: "Кол-во",
      dataIndex: "value",
      flex: 1,
    },
  ],
  // listeners: {
  //     select: 'onItemSelected'
  // }
});
