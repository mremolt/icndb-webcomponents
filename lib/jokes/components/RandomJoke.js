import BaseComponent from 'icndb/base/BaseComponent';
import templateString from '../templates/randomJoke.tpl.html!text';
import Joke from '../models/Joke';
import AJoke from './Joke';
import messageBus from 'icndb/utils/messageBus';


class RandomJoke extends BaseComponent {

  createdCallback() {
    this.channel = messageBus.channel('jokes');
  }

  attachedCallback() {
    super.attachedCallback();

    this.loadJoke();
    this.intervalId = setInterval(this.loadJoke.bind(this), 5000);
  }

  detachedCallback() {
    super.detachedCallback();
    clearInterval(this.intervalId);
  }


  loadJoke() {
    this.channel.request({
      topic: "random",
      timeout: 2000
    }).then((joke) => {
      this.joke = joke;
    });
  }


}

// Set template and register as element
RandomJoke.prototype.templateString = templateString;
document.registerElement('random-joke', {prototype: RandomJoke.prototype});

export default RandomJoke
