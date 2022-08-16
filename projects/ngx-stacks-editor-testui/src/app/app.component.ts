import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'ngx-stacks-editor-testui';
  markdown = `# My book title

  ## Chapter 1: Who done it?

  This is a test

  * Item 1
  * Item 2
    - Item 2 (a)
    - Item 2 (b)

  1. Item 1
  2. Item 2
  `;

  ngOnInit(): void {
    
  }
}
