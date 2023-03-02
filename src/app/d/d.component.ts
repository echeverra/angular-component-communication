import { Component } from '@angular/core';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
})
export class DComponent {
  data: any;

  constructor() {}

  getValue() {
    // 获取数据
    this.data = window.localStorage.getItem('cValue');
  }
}
