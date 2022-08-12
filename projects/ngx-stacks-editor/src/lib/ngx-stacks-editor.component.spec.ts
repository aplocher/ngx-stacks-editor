import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStacksEditorComponent } from './ngx-stacks-editor.component';

describe('NgxStacksEditorComponent', () => {
  let component: NgxStacksEditorComponent;
  let fixture: ComponentFixture<NgxStacksEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStacksEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxStacksEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
