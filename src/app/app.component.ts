import { Component } from '@angular/core';

@Component({
  selector: 'ce-eater-root',
  template: `
    <h1>Angular app</h1>
    <p>Value from one of the forms: <span style="font-weight: bold;">{{ nameFromForm }}</span></p>

    <div style="background-color: lightblue; padding: 25px; margin-bottom: 25px;">
      <h4>Angular form:</h4>
      <ce-eater-myngform (formSubmitted)="handleFormSubmitted($event)">
      </ce-eater-myngform>
    </div>

    <div style="background-color: lightgreen; padding: 25px;">
      <h4>Web Component form:</h4>
      <miniform-component (formSubmitted)="handleFormSubmitted($event)">
      </miniform-component>
    </div>
  `
})
export class AppComponent {
  nameFromForm = '';

  public handleFormSubmitted($event) {
    if ($event.detail) {
      // Value from Web Component
      this.nameFromForm = $event.detail;
    } else {
      // Value from Angular component
      this.nameFromForm = $event;
    }
  }
}
