import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
})
export class CollapseComponent implements OnInit {
  //Properties
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
  };
  loaded: boolean = true;
  enableAdd: boolean = true;
  currentClasses: {};
  currentStyles: {};
  showUserForm: boolean = false;
  photoCount: number = 4;
  data: any;
  @ViewChild('userForm') form: any;
  public isCollapsed: false;

  //Methods
  constructor(private userService: UserService) {}

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.enableAdd ? '10px' : '20px',
    };
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('FORM IS NOT VALID');
    } else {
      value.image = `http://lorempixel.com/600/600/people/${this.photoCount}`;
      this.photoCount += 1;
      this.userService.addUser(value);
      this.form.reset();
    }
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
    this.userService.getData().subscribe((data) => {
      console.log(data);
    });
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
}
