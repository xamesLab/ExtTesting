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
      renderer: function (v, m) {
        if (+v === 0) {
          m.style = "background-color: red";
        }
        return v;
      },
    },
  ],
  listeners: {
    //   select: 'onItemSelected'
    cellclick: function (grid, td, cellIndex, { data }, tr, rowIndex) {
      console.log(grid.getStore());
      var form = Ext.create("Ext.form.Panel", {
        renderTo: Ext.getBody(),
        bodyPadding: 5,
        width: 350,

        items: [
          {
            xtype: "displayfield",
            fieldLabel: "ID:",
            name: "theField",
            value: `${data.id}`,
          },
          {
            xtype: "displayfield",
            fieldLabel: "Наименование:",
            name: "theField",
            value: `${data.caption}`,
          },
          {
            xtype: "numberfield",
            fieldLabel: "Цена:",
            name: "theField",
            value: `${data.price}`,
          },
          {
            xtype: "numberfield",
            fieldLabel: "Кол-во:",
            name: "theField",
            value: `${data.value}`,
          },
        ],
      });
      //console.log(record);
      Ext.create("Ext.window.Window", {
        title: `Карточка товара: ${data.name}`,
        layout: "fit",

        items: [form],
      }).show();
    },
  },
});
