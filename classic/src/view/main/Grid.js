// функция валидации
var checkNumberVType = {
  priceNum: function (val, field) {
    if (!isNaN(+val) && +val >= 0) {
      return true;
    } else {
      false;
    }
  },
  valNum: function (val, field) {
    if (!isNaN(+val) && +val >= 0 && +val % 1 === 0) {
      return true;
    } else {
      false;
    }
  },
  passNumberText: "Неправильный ввод",
};

// добавляем новые валидаторы
Ext.apply(Ext.form.field.VTypes, checkNumberVType);

// создаем общий store
Ext.create("Ext.data.Store", {
  storeId: "myStore",
  fields: ["id", "name", "caption", "price", "value"],
  data: {
    items: [
      {
        id: "1",
        name: "Notebook Lenovo",
        caption: "Ноутбук ThinkPad 1460 14",
        price: "100",
        value: "2",
      },
      {
        id: "2",
        name: "Keyboard OKLICK",
        caption: "Клавиатура OKLICK 140M",
        price: "50",
        value: "8",
      },
      {
        id: "3",
        name: "Network adapter",
        caption: "Сетевой адаптер WIFI D-Link",
        price: "7",
        value: "0",
      },
    ],
  },
  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});

Ext.define("appTesting.view.main.Grid", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",

  requires: [
    "appTesting.view.main.GridController",
    "appTesting.view.main.MainModel",
  ],

  store: "myStore",
  controller: "grid",

  title: "Список товаров",

  tbar: [
    {
      xtype: "form",
      items: [
        {
          xtype: "textfield",
          name: "id",
          fieldLabel: "ID",
          listeners: {
            specialkey: "filtredById",
          },
        },
        {
          xtype: "textfield",
          name: "caption",
          fieldLabel: "Описание",
          listeners: {
            specialkey: "filtredByString",
          },
        },
      ],
    },
  ],

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
    cellclick: function (grid, td, cellIndex, { data }) {
      var oldPrice = data.price;
      var oldVal = data.value;
      var newPrice = oldPrice;
      var newVal = oldVal;

      if (+cellIndex === 1) {
        var form = Ext.create("Ext.form.Panel", {
          renderTo: Ext.getBody(),
          bodyPadding: 15,
          width: 400,

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
              vtype: "priceNum",
              value: `${data.price}`,
              listeners: {
                change: function () {
                  newPrice = this.up("form").items.get(2).value;
                  if (
                    +oldPrice !== this.up("form").items.get(2).value ||
                    +oldVal !== this.up("form").items.get(3).value
                  ) {
                    this.up("form").down("button").setDisabled(false);
                  } else {
                    this.up("form").down("button").setDisabled(true);
                  }
                  if (!this.up("form").isValid()) {
                    this.up("form").down("button").setDisabled(true);
                  }
                },
              },
            },
            {
              xtype: "numberfield",
              fieldLabel: "Кол-во:",
              name: "theField",
              vtype: "valNum",
              value: `${data.value}`,
              listeners: {
                change: function () {
                  newVal = this.up("form").items.get(3).value;
                  if (
                    +oldVal !== this.up("form").items.get(3).value ||
                    +oldPrice !== this.up("form").items.get(2).value
                  ) {
                    this.up("form").down("button").setDisabled(false);
                  } else {
                    this.up("form").down("button").setDisabled(true);
                  }
                  if (!this.up("form").isValid()) {
                    this.up("form").down("button").setDisabled(true);
                  }
                },
              },
            },
          ],

          buttons: {
            items: [
              {
                xtype: "button",
                text: "Сохранить",
                disabled: true,
                handler: function () {
                  if (this.up("form").isValid()) {
                    Ext.Msg.alert(
                      "Сохранение",
                      "Данные сохранены",
                      Ext.emptyFn
                    );
                    var mystore = Ext.getStore("myStore");
                    mystore.loadData(
                      [
                        {
                          id: data.id,
                          name: data.name,
                          caption: data.caption,
                          price: newPrice,
                          value: newVal,
                        },
                      ],
                      true
                    );
                    this.up("window").destroy();
                  }
                },
              },
              {
                xtype: "button",
                text: "Отмена",
                handler: function () {
                  this.up("window").destroy();
                },
              },
            ],
          },
        });

        Ext.create("Ext.window.Window", {
          title: `Карточка товара: ${data.name}`,
          layout: "fit",

          reference: "card",

          items: [form],
        }).show();
      }
    },
  },
});
