import { h } from 'vue';

const JSONfn = {
  stringify: function (obj, indent) {
    return JSON.stringify(obj, function (key, value) {
      var fnBody;
      if (value instanceof Function || typeof value == 'function') {
        fnBody = value.toString();
        if (fnBody.length < 8 || fnBody.substring(0, 8) !== 'function') { //this is ES6 Arrow Function
          return '_NuFrRa_' + fnBody;
        }
        return fnBody;
      }
      if (value instanceof RegExp) {
        return '_PxEgEr_' + value;
      }
      return value;
    }, indent || 2);
  }, 

  parse: function (str, date2obj) {
    var iso8061 = date2obj ? /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/ : false;
    return JSON.parse(str, function (key, value) {
      var prefix;
      if (typeof value != 'string') {
        return value;
      }
      if (value.length < 8) {
        return value;
      }
      prefix = value.substring(0, 8);
      if (iso8061 && value.match(iso8061)) {
        return new Date(value);
      }

      // #ifdef APP-PLUS || H5
      if (prefix === 'function') {
        value = value.trim();
        if (value[value.length - 1] === ';') {
          value = value.slice(0, value.length - 1);
        }
        return eval('(' + value + ')');
      }
      if (prefix === '_PxEgEr_') {
        return eval(value.slice(8));
      }
      if (prefix === '_NuFrRa_') {
        return eval(value.slice(8));
      }
      // #endif
      return value;
    });
  },

  clone: function (obj, date2obj) {
    return exports.parse(exports.stringify(obj), date2obj);
  }
}

export default JSONfn
