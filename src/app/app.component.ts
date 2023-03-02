import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  parentMsg: string = 'parent component message!';

  items = ['item1', 'item2', 'item3'];

  // 第一种方法：传入组件引用名child
  @ViewChild('child') private child: any;
  // 第二种方法：传入组件实例ChildComponent
  //@ViewChild(ChildComponent) private child: ChildComponent;

  constructor(private router: Router) {
    console.log('constructor func', this.child); // undefined
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit func', this.child); // ok
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  add(num: number) {
    this.child.add(num);
  }

  toArticle3() {
    this.router.navigate(['/detail', 3]);
  }

  toArticle4() {
    this.router.navigate(['/detail'], { queryParams: { id: 4 } });
  }
}
