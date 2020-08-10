import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  todaysDate: String;
  constructor() {
      setInterval( ()=>{
      let date = new Date();
      this.todaysDate = date.toDateString() + ' ' + date.toLocaleTimeString();
    } ,1000);
    

   }

  ngOnInit() {
  }

}
