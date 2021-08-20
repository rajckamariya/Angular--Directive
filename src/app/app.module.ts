import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight-directive.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BasicHighlightDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
