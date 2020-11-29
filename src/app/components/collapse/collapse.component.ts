import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User'

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent implements OnInit {

  //Properties
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    age: null
  };
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses: {};
  currentStyles: {};
  showUserForm: boolean = false;
  photoCount: number = 4;
  public isCollapsed: false;

  //Methods
  constructor() {}

  addUser() {

    this.user.image = `http://lorempixel.com/600/600/people/${this.photoCount}`
    this.photoCount += 1;
    this.users.unshift(this.user)
    this.user = {
      firstName: "",
      lastName: "", 
      age: null
    }
  }

  loadUsers() {
    setTimeout(() => this.loaded = true, 2000)
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.enableAdd ? '10px' : '20px'
    }
  }

  toggleHide(user: User) {
    user.hide = !user.hide
  }

  onSubmit(e) {
    e.preventDefault()
    this.addUser()
  }




  ngOnInit() {
    this.users = [
      {
        firstName: "Linda",
        lastName: 'Lutz',
        age: 55,
        image: "http://lorempixel.com/600/600/people/3",
        isActive: false,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: "Jim",
        lastName: 'Lutz',
        age: 60,
        image: "http://lorempixel.com/600/600/people/2",
        balance: 200,
        isActive: true,
        registered: new Date('02/02/2018 08:30:00'),
        hide: true
        
      },
      {
        firstName: "Jonny",
        lastName: 'Lutz',
        age: 35,
        image: "http://lorempixel.com/600/600/people/1",
        balance: 300,
        registered: new Date('03/02/2018 08:30:00'),
        isActive: true,
        hide: true
      }
    ]
    this.loadUsers()
    this.setCurrentClasses()
    this.setCurrentStyles()
  }
}



