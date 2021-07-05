import {Component, OnInit} from '@angular/core';
import {UserCreatedResponse} from '../../../models/user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
  }

  user: UserCreatedResponse;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('sma_user'));
    if (!this.user) {
      this.router.navigate(['']);
    }
  }

  logoutUser() {
    localStorage.removeItem('sma_user');
    this.router.navigate(['']);
  }

}
