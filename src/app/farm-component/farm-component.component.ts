import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farm-component',
  templateUrl: './farm-component.component.html',
  styleUrls: ['./farm-component.component.css']
})
export class FarmComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log('hello');
    console.log('abc');
    console.log(123);
    console.log("qwe");
    console.log("mno");
  }

}
