import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {
  isCollapsed: Boolean = true;
  @Input('user') user: User;

  constructor() {
    
   }

   toggleCollapsed()
   {
     this.isCollapsed = !this.isCollapsed;
   } 

  ngOnInit() {
    
  }

}
