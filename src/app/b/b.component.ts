import { Component } from '@angular/core';
// 1. 引入
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html'
})
export class BComponent {
  data: any;

  // 2. subscription
  subscription: Subscription;

  constructor(public dataService: DataService) {
    // 3. 订阅
    this.subscription = this.dataService.subject.subscribe((data) => {
      this.data = data;
    });
  }

  ngOndestry(): void {
    // 4. 注销
    this.subscription.unsubscribe();
  }
}
