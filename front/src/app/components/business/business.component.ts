import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  
  name: string;
  username: string;
  email: string;
  password: string;
  password1: string;//
  password2: string;//
  birth: number;//
  licenseNum: string;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router :Router) { }

    ngOnInit(): void {
    }

    onRegisterSubmit(){ 

    if (this.password1 !== this.password2) {
      console.log('패스워드가 다릅니다');
      this.flashMessage.show('패스워드가 다릅니다. 다시 입력하세요', { cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    const businessuser = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password1,
      birth: this.birth,
      licenseNum: this.licenseNum
      }

    
    if(!this.validateService.validatebusiness(businessuser)){
      this.flashMessage.show('모두 입력해 주세요', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if(!this.validateService.validateEmail(businessuser.email)){
      this.flashMessage.show('이메일 주소가 올바르지 않습니다', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.businessUser(businessuser).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/businesslogin']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/business']);
      }
    });
  }


}
