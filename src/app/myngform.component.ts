import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ce-eater-myngform',
  template: `
    <form [formGroup]="nameForm" (ngSubmit)="handleSubmit($event)" novalidate>
      Name: <input placeholder="Name here" formControlName="name">
      <button type="submit">Submit</button>
    </form>
  `
})
export class MyNgFormComponent {
  @Output() formSubmitted = new EventEmitter();

  nameForm = this.formBuilder.group({
    name: ''
  });

  handleSubmit($event) {
    const nameInputValue = this.nameForm.controls.name;
    this.formSubmitted.emit(nameInputValue.value);
  }

  constructor(private formBuilder: FormBuilder) {}
}
