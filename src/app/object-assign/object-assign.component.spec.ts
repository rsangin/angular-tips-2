import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectAssignComponent } from './object-assign.component';

describe('ObjectAssignComponent', () => {
  let component: ObjectAssignComponent;
  let fixture: ComponentFixture<ObjectAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
