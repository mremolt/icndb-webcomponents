import { camelize } from 'icndb/utils/string';
import templateEngine from 'icndb/utils/templating';
import watcher from 'watch';

export default class BaseComponent extends HTMLElement {

  createdCallback() {

  }

  attachedCallback() {
    this.initAttributes();
    this.shadow = this.createShadowRoot();
    this.shadow.appendChild(this.template);
  }

  detachedCallback() {
    this.view.unbind();
  }

  attributeChangedCallback() {

  }


  get template() {
    if(! this.templateString) {
      throw new Error('Please set this.templateString!');
    }

    if (! this._template) {
      var documentFragment = document.createElement('div');
      documentFragment.innerHTML = this.templateString;

      this.view = templateEngine.bind(documentFragment, { cn: this });
      this._template = documentFragment;
    }

    return this._template;
  }


  initAttributes() {
    Array.from(this.attributes).forEach(attribute => {
      var name = camelize(attribute.nodeName);
      var value = attribute.value;
      this[name] = value;
    });
  }

  setValue(name, value) {
    var oldValue =  this['_' + name];
    this['_' + name] = value;

    watcher.callWatchers(this, name, 'set', value, oldValue);
  }

}
