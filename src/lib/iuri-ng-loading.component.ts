import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'iuri-ng-loading',
  templateUrl: './iuri-ng-loading.component.html',
  styleUrls: ['./iuri-ng-loading.component.css']
})
export class IuriNgLoadingComponent implements OnInit {

  @Input() image: string;
  @Input() size = '3em';
  @ViewChild('background') background: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  getHeight() {
    return !this.size.includes('%') ? this.size : this.getPercentSize( this.background.nativeElement.offsetHeight );
  }

  getWidth() {
    return !this.size.includes('%') ? this.size : this.getPercentSize( this.background.nativeElement.offsetHeight );
  }

  getPartialSize(partial: number) {
    const array = this.size.split('');

    if ( !array.length ) {
      return '0px';
    }

    let str = '';
    let strPosition: number;
    for (let i = 0; i < array.length; i++) {
      if ( !isNaN( Number(array[i]) ) ) {
        str = str.concat(array[i]);
      } else {
        strPosition = strPosition ? strPosition : i;
      }
    }

    return String(Number(str) / partial) + array.splice(strPosition).join('');
  }

  getPercentSize( domSize: number ) {
    return String( ( domSize / 100 ) * Number( this.size.replace(/%/g, '') ) ).concat('px');
  }

}
