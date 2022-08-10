import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyArithmaticOperationComponent } from './multiply-arithmatic-operation.component';

describe('MultiplyArithmaticOperationComponent', () => {
  let component: MultiplyArithmaticOperationComponent;
  let fixture: ComponentFixture<MultiplyArithmaticOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplyArithmaticOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplyArithmaticOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
