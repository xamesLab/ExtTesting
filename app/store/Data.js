Ext.define("appTesting.store.Data", {
  extend: "Ext.data.Store",
  storeId: "mystore",

  alias: "store.data",

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
