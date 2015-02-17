
class CurrentTime extends HTMLElement {

  attachedCallback() {
    this.shadow = this.createShadowRoot();
    this.updateInterval = this.getAttribute('update-every') * 1000;
    console.log('attached', this.updateInterval);

    this.shadow.innerHTML = this.currentDate;

    this.intervalId = setInterval(() => {
      this.shadow.innerHTML = this.currentDate;
    }, this.updateInterval);
  }

  detachedCallback() {
    console.log('detaching');
    clearInterval(this.intervalId);
  }

  get currentDate() {
    var now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }

}

document.registerElement('current-time', CurrentTime);
export default CurrentTime;
