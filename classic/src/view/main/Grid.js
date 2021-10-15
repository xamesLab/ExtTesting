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
    afterrender: function () {
      // var st = this.getStore("data");
      // //st.getById("1")
      // st.loadData([{ id: 1 }], true);
      // console.log(st);
    },

    cellclick: function (grid, td, cellIndex, { data }, tr, rowIndex) {
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
                  var mystore = Ext.getStore("mystore");
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

          requires: ["appTesting.store.Data"],

          store: {
            type: "data",
          },

          items: [form],
        }).show();
      }
    },
  },
});
