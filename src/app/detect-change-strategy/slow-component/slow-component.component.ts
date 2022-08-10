import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-slow-component',
  templateUrl: './slow-component.component.html',
  styleUrls: ['./slow-component.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlowComponentComponent {
  public lastRandomNumber = 0;

  private numbers: number[] = [];

  private readonly min = 0;
  private readonly max = 100000;

  constructor(private chRef: ChangeDetectorRef) {
    for (let i = 0; i < this.max; i++) {
      this.numbers.push(Math.randomInt(this.min, this.max));
    }
  }

  public exists(): boolean {
    this.lastRandomNumber = Math.randomInt(this.min, this.max);
    return this.numbers.includes(this.lastRandomNumber);
  }

  @HostListener('click')
  public click(): void {
    this.chRef.detectChanges();
  }
}
