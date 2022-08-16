import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StacksEditor } from '@stackoverflow/stacks-editor';

import "@stackoverflow/stacks";

@Component({
  selector: 'ngx-stacks-editor',
  template: `
    <div id="editor-container"></div>
  `,
  styleUrls: [
    "ngx-stacks-editor.component.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxStacksEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new StacksEditor(document.querySelector("#editor-container"), 'test');
  }
}
