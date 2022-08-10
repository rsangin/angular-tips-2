interface Math {
  randomInt(min: number, max: number): number;
}

interface Array<T> {
  toMap<TKey, TValue>(
    keyFunction: (key: T) => TKey,
    valueFunction?: (key: T) => TValue
  ): Map<TKey, TValue>;
}
