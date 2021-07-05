import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  username: string ;
  password: string;

  ngOnInit(): void {

  }
  login(): any {
    this.adminService.login({username : this.username, password: this.password})
      .subscribe(res => {
        console.log(res);
        alert(res);
      }, (error) => {
        console.log(error);
        alert(error);
      });
  }


}
