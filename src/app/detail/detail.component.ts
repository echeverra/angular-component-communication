import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  id: any;

  constructor(private routeInfo: ActivatedRoute) {}

  ngOnInit() {
    // 文章1、3获取路由参数方法
    this.routeInfo.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    // 文章2、4获取路由参数方法（params改为queryParams）
    // this.routeInfo.queryParams.subscribe((params: Params) => {
    //   this.id = params['id'];
    // });

    // 文章1、3获取路由参数方法（subscribe参数订阅改为snapshot参数快照）
    // this.id = this.routeInfo.snapshot.params['id'];

    // 文章2、4获取路由参数方法（params改为queryParams）
    // this.id = this.routeInfo.snapshot.queryParams['id'];
  }
}
