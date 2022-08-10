import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random',
})
export class RandomPipe implements PipeTransform {
  transform(numbers: number[], min: number, max: number): boolean {
    return numbers.includes(Math.randomInt(min, max));
  }
}
