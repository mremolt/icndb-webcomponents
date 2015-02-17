import BaseComponent from 'icndb/base/BaseComponent';
import templateString from './helloWorld.tpl.html!text';




class HelloWorld extends BaseComponent {

  createdCallback() {
    super.createdCallback();


    //setInterval(() => {
    //  this.counter++;
    //}, 1000);

    //Object.observe(this, function () {
    //  console.log('change!', arguments);
    //});

    this.person = {
      firstName: 'Arthur',
      lastName: 'Dent'
    };
    this.counter = 0;
    this.numbers = [
      { value: 1 },
      { value: 2 },
      { value: 4 },
      { value: 6 },
      { value: 7 },
      { value: 9 },
      { value: 42 }
    ];
    this.selectedNumber = 4;

  }

  selectNumber() {
    //console.log('select hier!!!!!', this, arguments);
  }

}

// Set template and register as element
HelloWorld.prototype.templateString = templateString;
document.registerElement('hello-world', {prototype: HelloWorld.prototype});

export default HelloWorld
