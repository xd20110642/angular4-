import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessComponent } from './mess/mess.component';
import {MessService} from "./shared/mess.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MessPipe } from './pipe/mess.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MessComponent,
    MessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
