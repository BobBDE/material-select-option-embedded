import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SelectWrapperComponent } from './select-wrapper/select-wrapper.component';
import { EmbeddedOptionsNotWorkingComponent } from './embedded-options-not-working/embedded-options-not-working.component';
import { EmbeddedOptionsWorkingComponent } from './embedded-options-working/embedded-options-working.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmbeddedOptionsFinalComponent } from './embedded-options-final/embedded-options-final.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectWrapperComponent,
    EmbeddedOptionsNotWorkingComponent,
    EmbeddedOptionsWorkingComponent,
    EmbeddedOptionsFinalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
