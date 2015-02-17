import BaseComponent from 'icndb/base/BaseComponent';
import templateString from '../templates/joke.tpl.html!text';


class AJoke extends BaseComponent {

}

// Set template and register as element
AJoke.prototype.templateString = templateString;
document.registerElement('a-joke', { prototype: AJoke.prototype });

export default AJoke
