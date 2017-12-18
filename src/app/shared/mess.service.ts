import { Injectable } from '@angular/core';

@Injectable()
export class MessService {
  public mess: Array<Message>;
  constructor() {
    this.mess = [
      new Message (1, "小明", 18, "今天是个好日子"),
      new Message(2, "小红", 15, "今天有太阳"),
      new Message(3, "小绿", 19, "今天我们结婚了"),
      new Message(4, "小蓝", 13, "花儿一坨")
    ];
  }

//  返回的信息
  getMess(): Array<Message> {
    return this.mess;
  }
// //  返回收索结果
//   getProduct(id: number): Message {
//     return this.mess.find( ( Message ) =>  Message.id === id );
//   }

}
// 定义一个类
export class Message {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public talk: string
  ) {

  }
}
