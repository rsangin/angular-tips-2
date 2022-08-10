import { Component } from '@angular/core';
import ArithmaticOperationView from '../models/arithmatic-operation-manager';
import { BaseArithmaticOperation } from '../models/base-arithmatic-operation';

@ArithmaticOperationView('multiply')
@Component({
  selector: 'app-multiply-arithmatic-operation',
  templateUrl: './multiply-arithmatic-operation.component.html',
  styleUrls: ['./multiply-arithmatic-operation.component.scss'],
})
export class MultiplyArithmaticOperationComponent extends BaseArithmaticOperation {}
