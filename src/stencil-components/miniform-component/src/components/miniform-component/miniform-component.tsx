import { Component, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'miniform-component'
})
export class MiniformComponent {

  @State() value: string;
  @Event() formSubmitted: EventEmitter;

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.value);
    // send data to our backend
    this.formSubmitted.emit(this.value);
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input type="text" placeholder="Name here" value={this.value} onInput={(event) => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}