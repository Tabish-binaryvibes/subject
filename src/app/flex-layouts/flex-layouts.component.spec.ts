import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutsComponent } from './flex-layouts.component';

describe('FlexLayoutsComponent', () => {
  let component: FlexLayoutsComponent;
  let fixture: ComponentFixture<FlexLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
