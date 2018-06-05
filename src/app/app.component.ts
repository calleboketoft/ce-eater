import { Component } from '@angular/core';

@Component({
  selector: 'ce-eater-root',
  template: `
    <h1>Angular app</h1>
    <p>Value from Web Component read directly in Angular: <span style="font-weight: bold;">{{ nameFromForm }}</span></p>
    <div style="background-color: lightgray; padding: 25px;">
      <miniform-component (formSubmitted)="handleFormSubmitted($event)">
      </miniform-component>
    </div>
  `
})
export class AppComponent {
  nameFromForm = '';

  public handleFormSubmitted($event) {
    this.nameFromForm = $event.detail;
  }
}
