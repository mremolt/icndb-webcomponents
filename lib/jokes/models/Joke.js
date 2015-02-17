import reqwest from 'reqwest';
import { defer } from 'icndb/utils/async';
import messageBus from 'icndb/utils/messageBus';


let key = Symbol('key');


class Joke {

  constructor(data) {
    this[key] = data;
  }

  get text() {
    return this[key].joke;
  }

  get categories() {
    return this[key].categories.join(', ') || 'no category';
  }

  static sample(number) {
    let deferred = defer();

    reqwest({
      url: `http://api.icndb.com/jokes/random/${number}`,
      crossOrigin: true,
      type: 'json',

      success(resp) {
        var jokes = resp.value.map(data => {
          return new Joke(data);
        });
        deferred.resolve(jokes);
      },
      error(err) {
        deferred.reject(err);
      }
    });


    return deferred.promise;
  }

}

// alternative to static methods, just use the message bus
var channel = messageBus.channel('jokes');

channel.subscribe('random', (data, envelope) => {
  reqwest({
    url: 'http://api.icndb.com/jokes/random',
    type: 'json',
    crossOrigin: true,
    success(resp) {
      envelope.reply(null,  new Joke(resp.value));
    },
    error(err) {
      console.error('ARGH', err);
      envelope.reply(err);
    }
  });
});


export default Joke
