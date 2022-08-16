import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { StacksEditor, StacksEditorOptions } from '@stackoverflow/stacks-editor';

import "@stackoverflow/stacks";

@Component({
  selector: 'ngx-stacks-editor',
  template: `
    <div #stacksEditor></div>
  `,
  styleUrls: ["ngx-stacks-editor.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class NgxStacksEditorComponent implements AfterViewInit {

  @Input() content: string;
  @Input() options: StacksEditorOptions;

  @ViewChild("stacksEditor") stacksEditor: ElementRef<HTMLElement>;

  constructor() { }

  ngAfterViewInit(): void {
    let stacksNativeElement = this.stacksEditor.nativeElement;
    new StacksEditor(stacksNativeElement, this.content, this.options);
  }
}
