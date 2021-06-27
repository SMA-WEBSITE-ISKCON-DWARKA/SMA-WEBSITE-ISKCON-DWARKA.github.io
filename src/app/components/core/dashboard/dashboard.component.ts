import { Component, OnInit } from '@angular/core';
import {UserCreatedResponse} from '../../../models/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  user: UserCreatedResponse;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('sma_user'));
  }

}
