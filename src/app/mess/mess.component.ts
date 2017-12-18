import { Component, OnInit } from '@angular/core';
import {Message, MessService} from "../shared/mess.service";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
@Component({
  selector: 'app-mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.css']
})
export class MessComponent implements OnInit {
  // 定义显示全部的数据
  public mess: Array<Message>;
  // 定义输入的值
  public keyword: string;
  // 监测表单的验证事件
  public value:FormControl = new FormControl();
  // 定义一个控制显示的输入的值
  public isshow = true;
  // 定义输入的姓名
  public addname: string;
  // 定义输入的年龄
  public addage: number;
  // 定义输入的话
  public text: any;
  public i: number = 4;
  constructor(
    public messservice: MessService
  ) {
    this.mess = this.messservice.getMess();
    this.value.valueChanges
      .debounceTime(500)
      .subscribe(
        a => {this.keyword = a, console.log(a)},
        err => console.log(err),
        () => console.log()
      );
  }

  ngOnInit() {
  }
  onadd() {

    let i = this.i ++;
    this.mess.push( new Message(i,"王刚",62,"今天天气不错"));
  }
  onremove() {
    this.mess.pop();
  }
  onpush() {
    // 复原
    let i = this.i++;
    let add = new Message( i, this.addname, this.addage, this.text);
    this.mess.unshift(add);


    this.isshow = true;
  }
}
