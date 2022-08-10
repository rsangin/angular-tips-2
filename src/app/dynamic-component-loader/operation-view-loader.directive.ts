import { Directive, Input, ViewContainerRef } from '@angular/core';
import { ArithmaticOperationManager } from './models/arithmatic-operation-manager';

@Directive({
  selector: 'app-operation-view-loader',
})
export class OperationViewLoaderDirective {
  @Input()
  public firstNumber = 0;

  @Input()
  public secondNumber = 0;

  @Input()
  public set operation(value: string) {
    if (value !== this._operation) {
      this._operation = value;
      this.loadComponent();
    }
  }

  public get operation(): string {
    return this._operation;
  }

  private _operation = '';

  constructor(private viewContainerRef: ViewContainerRef) {}

  private loadComponent(): void {
    this.viewContainerRef.clear();
    const component = ArithmaticOperationManager.getOperation(this.operation);
    const ref = this.viewContainerRef.createComponent(component);

    ref.instance.firstNumber = this.firstNumber;
    ref.instance.secondNumber = this.secondNumber;
  }
}
