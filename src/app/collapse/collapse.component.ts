import { Component, OnInit } from '@angular/core';
import {User} from '../models/User'

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent implements OnInit {

  //Properties
  users: User[];
  loaded: boolean = false;
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
    // this.users = [
    //   {
    //     firstName: "Linda",
    //     lastName: 'Lutz',
    //     age: 55
    //   },
    //   {
    //     firstName: "Jim",
    //     lastName: 'Lutz',
    //     age: 60
    //   },
    //   {
    //     firstName: "Jonny",
    //     lastName: 'Lutz',
    //     age: 35
    //   }
    // ]
    // this.addUser({
    //   firstName: "Mike",
    //   lastName: 'Smith',
    //   age: 22
    // })
    this.users=[]
    this.loadUsers()
  }
}



