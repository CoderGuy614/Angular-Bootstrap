import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: 'Linda',
        lastName: 'Lutz',
        age: 64,
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: false,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Jim',
        lastName: 'Lutz',
        age: 60,
        image: 'http://lorempixel.com/600/600/people/2',
        balance: 200,
        isActive: true,
        registered: new Date('02/02/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: 'Jonny',
        lastName: 'Lutz',
        age: 35,
        image: 'http://lorempixel.com/600/600/people/1',
        balance: 300,
        registered: new Date('03/02/2018 08:30:00'),
        isActive: true,
        hide: true,
      },
    ];
  }
  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
