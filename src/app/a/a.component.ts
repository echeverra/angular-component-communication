import { Component } from '@angular/core';
// 1. 引入
import { DataService } from '../data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html'
})
export class AComponent {
  // 2. 注册
  constructor(public dataService: DataService) {}

  inputValue: string = '';

  send(): void {
    console.log(this.inputValue);
    // 3. 发布
    this.dataService.subject.next(this.inputValue);
  }
}
