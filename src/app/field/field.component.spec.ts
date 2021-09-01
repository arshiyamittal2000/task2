import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fieldComponent } from './field.component';

describe('fieldComponent', () => {
  let component: fieldComponent;
  let fixture: ComponentFixture<fieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ fieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(fieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
