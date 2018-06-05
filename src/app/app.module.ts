import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import '../stencil-components/miniformcomponent';
import { MyNgFormComponent } from './myngform.component';

@NgModule({
  declarations: [AppComponent, MyNgFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
