import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges {

  constructor() { }
  @Input()
  private rate = 5;
  @Input()
  private _max = 10;
  ngOnChanges(changes: SimpleChanges) {
    if ('_max' in changes) {
      let max = changes._max.currentValue;
      max = typeof max === 'undefined' ? 10 : max;
      const maxFixed = Number(max);
      this._max = Number.isNaN(maxFixed) ? 10 : max;
    }
  }
  @Input()
  isDisplayed = true;

  get numbers(): any[] {
    return this._numbers;
  }

  set numbers(value: any[]) {
    this._numbers = value;
  }

  private _numbers = [];




  get max(): number {
    return this._max;
  }

  set max(value: number) {

    this._max = value;

  }


  clickHideButton() {
    this.isDisplayed = !this.isDisplayed;
  }


  click(i: number) {
    this.rate = i;
  }

  ngOnInit() {
    for (let i = 0; i < this._max; i++) {
      this.numbers[i] = i + 1;
    }
  }


}
