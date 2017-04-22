import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedTableComponent } from './typed-table.component';

describe('TypedTableComponent', () => {
  let component: TypedTableComponent;
  let fixture: ComponentFixture<TypedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
