import { Component } from '@angular/core';
import { User } from './new-page/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  user:User;
  
  constructor(){
    this.user = new User();
    this.user.name = 'Arjun Patel';
    this.user.title = 'Sr. Software Engineer';
    this.user.address = '808 Peachtree Road Apt K, Claymont DE 19703';
    this.user.phone = [
        '331-980-4195',
        '224-386-5438',
        '234-432-2323'
        ]
  }

}
