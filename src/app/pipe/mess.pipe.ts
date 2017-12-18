import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mess'
})
export class MessPipe implements PipeTransform {

  transform(list: any, name: any, keyword: string): any {
    if (!name || !keyword) {
      return list;
    }

    return list.filter((item) => {
      // 获取到数组的那个姓名那一行
      let nameVulae = item[name];
      return nameVulae.indexOf(keyword) >= 0;
    });
  }

}
