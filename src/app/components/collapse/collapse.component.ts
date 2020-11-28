import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User'

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent implements OnInit {

  //Properties
  users: User[];
  loaded: boolean = false;
  enableAdd: boolean = true;
  public isCollapsed: false;

  //Methods
  constructor() {}

  addUser(user: User) {
    this.users.push(user)
  }

  loadUsers() {
    setTimeout(() => this.loaded = true, 2000)
  }

  ngOnInit() {
    this.users = [
      {
        firstName: "Linda",
        lastName: 'Lutz',
        age: 55,
        image: "http://lorempixel.com/600/600/people/3"
      },
      {
        firstName: "Jim",
        lastName: 'Lutz',
        age: 60,
        image: "http://lorempixel.com/600/600/people/2"
      },
      {
        firstName: "Jonny",
        lastName: 'Lutz',
        age: 35,
        image: "http://lorempixel.com/600/600/people/1"
      }
    ]
    this.addUser({
      firstName: "Mike",
      lastName: 'Smith',
      age: 22
    })
 
    this.loadUsers()
  }
}



