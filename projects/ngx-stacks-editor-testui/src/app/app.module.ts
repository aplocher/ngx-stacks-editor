import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxStacksEditorModule } from 'projects/ngx-stacks-editor/src/lib/ngx-stacks-editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStacksEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
