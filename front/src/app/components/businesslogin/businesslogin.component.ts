import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-businesslogin',
  templateUrl: './businesslogin.component.html',
  styleUrls: ['./businesslogin.component.scss']
})
export class BusinessloginComponent implements OnInit {
  username: string;
  password: string;
  licenseNum: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    const businesslogin = {
      username: this.username,
      password: this.password,
      licenseNum: this.licenseNum
    }

    this.authService.authenticateUser(businesslogin).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.userNoPW);
        this.flashMessage.show('환영합니다!',
          {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['businesslogin']);
      }
    });
  }

}