import { Component, Input } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseArithmaticOperation {
  @Input()
  public firstNumber: number = 0;

  @Input()
  public secondNumber: number = 0;
}
