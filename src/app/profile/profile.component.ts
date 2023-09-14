import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData = {
    username: '',
    gender: '',
    email: '',
    firstName: '',
    lastName: ''
  }
  constructor() {

  }

  ngOnInit(): void {
    let userSessionData = sessionStorage.getItem("userData");
    this.userData = JSON.parse(userSessionData || '');
  }
}
