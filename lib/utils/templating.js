import rivets from 'rivets';
import watcher from 'watch';
import {camelize} from 'icndb/utils/string';


rivets.adapters[':'] = {
  observe: function (obj, keypath, callback) {
    watcher.watch(obj, keypath, callback, 0, true);
  },
  unobserve: function (obj, keypath, callback) {
    watcher.unwatch(obj, keypath, callback);
  },
  get: function (obj, keypath) {
    return obj[keypath];
  },
  set: function (obj, keypath, value) {
    obj[keypath] = value;
  }
};


// allow binding of objects
rivets.binders['obj-*'] = {
  bind(el) {
    var model = this.model;
    var keypath = this.keypath.split(':')[1];
    var attr = camelize(this.type.replace('obj-', ''));

    el[attr] = model[keypath];
  },

  routine(el, value) {
    el[this.args[0]] = value;
  }
};


console.log(watcher);

export default rivets;
