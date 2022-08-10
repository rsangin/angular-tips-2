import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractArithmaticOperationComponent } from './subtract-arithmatic-operation.component';

describe('SubtractArithmaticOperationComponent', () => {
  let component: SubtractArithmaticOperationComponent;
  let fixture: ComponentFixture<SubtractArithmaticOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtractArithmaticOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtractArithmaticOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
