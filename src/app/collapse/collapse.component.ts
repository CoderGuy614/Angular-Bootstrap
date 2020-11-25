import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent {

  //Properties

  firstName = 'Jonny';
  lastName = 'Lutz';
  public isCollapsed = false;

  //Methods
  constructor() {
    console.log('HELLO FROM COLLAPSE COMPONENT')
    this.sayHello()
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`)
  }


}