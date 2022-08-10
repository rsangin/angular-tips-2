import { Component } from '@angular/core';
import ArithmaticOperationView from '../models/arithmatic-operation-manager';
import { BaseArithmaticOperation } from '../models/base-arithmatic-operation';

@ArithmaticOperationView('subtract')
@Component({
  selector: 'app-subtract-arithmatic-operation',
  templateUrl: './subtract-arithmatic-operation.component.html',
  styleUrls: ['./subtract-arithmatic-operation.component.scss'],
})
export class SubtractArithmaticOperationComponent extends BaseArithmaticOperation {}
