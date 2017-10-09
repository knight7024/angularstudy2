import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  datas = [{
    title: "Angular2 어려워요.",
    writer: "정종우",
    date: "2017-10-08"
  },
  {
    title: "집에 가고 싶다.",
    writer: "정종우",
    date: "2017-10-07"
  },
  {
    title: "한 달만 더 쉬게 해주세요.",
    writer: "정종우",
    date: "2017-10-09"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
