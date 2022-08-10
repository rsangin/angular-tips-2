import { Component } from '@angular/core';
import ArithmaticOperationView from '../models/arithmatic-operation-manager';
import { BaseArithmaticOperation } from '../models/base-arithmatic-operation';

@ArithmaticOperationView('add')
@Component({
  selector: 'app-add-arithmatic-operation',
  templateUrl: './add-arithmatic-operation.component.html',
  styleUrls: ['./add-arithmatic-operation.component.scss'],
})
export class AddArithmaticOperationComponent extends BaseArithmaticOperation {}
