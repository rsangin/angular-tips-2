import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArithmaticOperationComponent } from './add-arithmatic-operation.component';

describe('AddArithmaticOperationComponent', () => {
  let component: AddArithmaticOperationComponent;
  let fixture: ComponentFixture<AddArithmaticOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArithmaticOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArithmaticOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
