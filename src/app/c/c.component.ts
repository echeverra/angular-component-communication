import { Component } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
})
export class CComponent {
  constructor() {}

  inputValue: string = '';

  send(): void {
    // 存储数据
    window.localStorage.setItem('cValue', this.inputValue);
  }
}
