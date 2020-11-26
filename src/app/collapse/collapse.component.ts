import { Component } from '@angular/core';
import {User} from '../models/User'

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent {

  //Properties

  user: User;
  public isCollapsed: false;

  //Methods
  constructor() {
    this.user = {
      firstName: "Mike",
      lastName: "Smith", 
      age: 50,
      address: {
        city: 'Columbus', 
        state: "Ohio"
      }
    }
  }
}



