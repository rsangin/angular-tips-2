import { ChangeDetectorRef, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-fast-component',
  templateUrl: './fast-component.component.html',
  styleUrls: ['./fast-component.component.scss'],
})
export class FastComponentComponent {
  public numbers: number[] = [];

  public readonly min = 0;
  public readonly max = 100000;

  constructor(private chRef: ChangeDetectorRef) {
    for (let i = 0; i < this.max; i++) {
      this.numbers.push(Math.randomInt(this.min, this.max));
    }
  }

  @HostListener('click')
  public click(): void {
    this.chRef.detectChanges();
  }
}
