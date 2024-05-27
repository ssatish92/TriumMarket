import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';



@NgModule({
    declarations: [
            
            
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
