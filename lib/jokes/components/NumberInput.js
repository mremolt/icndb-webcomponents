import BaseComponent from 'icndb/base/BaseComponent';
import templateString from '../templates/numberInput.tpl.html!text';
import messageBus from 'icndb/utils/messageBus';


class NumberInput extends BaseComponent {

  createdCallback() {
    this.channel = messageBus.channel('jokes');

    //setInterval(() => {
    //  //console.log('number', this.number, this.attributes);
    //}, 1000);
  }

  attachedCallback() {
    super.attachedCallback();

    var numberInput = this.shadow.querySelector('input');

    numberInput.addEventListener('change', (event) => {
      this.channel.publish('number:changed', {
        number: event.target.value
      });
    });
  }

}

// Set template and register as element
NumberInput.prototype.templateString = templateString;
document.registerElement('number-input', {prototype: NumberInput.prototype});

export default NumberInput



