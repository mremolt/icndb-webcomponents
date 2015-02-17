import BaseComponent from 'icndb/base/BaseComponent';
import templateString from '../templates/jokeList.tpl.html!text';
import Joke from '../models/Joke';
import AJoke from './Joke';
import messageBus from 'icndb/utils/messageBus';
import watcher from 'watch';


class JokeList extends BaseComponent {

  createdCallback() {
    this.channel = messageBus.channel('jokes');

    this.channel.subscribe('number:changed', (data) => {
      this.numberOfJokes = data.number;
    });

    // if you don't want to use getters/setters, but the usual angular like $watch:
    //watcher.watch(this, 'numberOfJokes', (name, type, value) => {
    //  console.log('watcher fired', arguments);
    //  this[name] = value;
    //  this.updateList();
    //});
  }

  get numberOfJokes() {
    return this._numberOfJokes;
  }

  set numberOfJokes(number) {
    this.setValue('numberOfJokes', parseInt(number));
    this.updateList();
  }

  updateList() {
    Joke.sample(this.numberOfJokes).then(jokes => {
      this.jokes = jokes;
    });
  }

}


// Set template and register as element
JokeList.prototype.templateString = templateString;
document.registerElement('joke-list', {prototype: JokeList.prototype});

export default JokeList
