import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: User[];
  data: Observable<any>;
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

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
