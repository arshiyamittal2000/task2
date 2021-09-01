import { ComponentFixture, TestBed } from '@angular/core/testing';

import { subjectsComponent } from './subjects.component';

describe('subjectsComponent', () => {
  let component: subjectsComponent;
  let fixture: ComponentFixture<subjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ subjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(subjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
