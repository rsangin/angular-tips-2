import { BaseArithmaticOperation } from './base-arithmatic-operation';

export class ArithmaticOperationManager {
  private static readonly operations = new Map<
    string,
    new (...args: any[]) => BaseArithmaticOperation
  >();

  public static addOperation(
    key: string,
    operation: new (...args: any[]) => BaseArithmaticOperation
  ): void {
    this.operations.set(key, operation);
  }

  public static getOperation(
    operation: string
  ): new (...args: any[]) => BaseArithmaticOperation {
    if (this.operations.has(operation))
      return this.operations.get(operation) as new (
        ...args: any[]
      ) => BaseArithmaticOperation;

    throw new Error();
  }

  public static getOperations(): string[] {
    return Array.from(this.operations.keys());
  }
}

export default function ArithmaticOperationView(key: string) {
  return (ctor: new () => BaseArithmaticOperation) => {
    ArithmaticOperationManager.addOperation(key, ctor);
  };
}
