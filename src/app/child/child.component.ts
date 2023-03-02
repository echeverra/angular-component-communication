import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() childMsg: string = '';
  @Output() newItemEvent = new EventEmitter<string>();
  count: number = 0;

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  add(num: number) {
    this.count = this.count + num;
  }

  addOne() {
    this.count++;
  }
}
