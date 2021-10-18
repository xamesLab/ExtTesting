Ext.define("appTesting.view.main.GridController", {
  extend: "Ext.app.ViewController",
  alias: "controller.grid",

  filtredById: function (el, e) {
    if (e.getKey() === 13) {
      var form = el.up("form");

      Ext.getStore("myStore").filterBy(function (r) {
        if (form.items.get(0).value === "") {
          return true;
        }
        if (r.data.id === form.items.get(0).value) {
          return true;
        }
      });
    }
  },

  filtredByString: function (el, e) {
    if (e.getKey() === 13) {
      var form = el.up("form");

      Ext.getStore("myStore").filterBy(function (r) {
        var str = r.data.caption.toLowerCase();
        var subStr = form.items.get(1).value.toLowerCase();
        if (subStr === "") {
          return true;
        }
        if (str.indexOf(subStr) !== -1) {
          return true;
        }
      });
    }
  },
});
