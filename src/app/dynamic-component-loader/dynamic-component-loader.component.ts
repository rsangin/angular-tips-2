import { Component } from '@angular/core';
import { ArithmaticOperationManager } from './models/arithmatic-operation-manager';

@Component({
  selector: 'app-dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
  styleUrls: ['./dynamic-component-loader.component.scss'],
})
export class DynamicComponentLoaderComponent {
  public firstNumber = 0;
  public secondNumber = 0;

  public operationName = '';
  public operations = ArithmaticOperationManager.getOperations();
}
