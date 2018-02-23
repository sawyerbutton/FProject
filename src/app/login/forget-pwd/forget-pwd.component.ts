import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../bz-modules/models/user-model';
//import {ForgetPwdService} from './forget-pwd.service'
@Component({
  selector: 'forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.scss']
})
export class ForgetPwdComponent implements OnInit {
  public user: User = new User();
  public message: string;
  public messgeType: string;
  private alert:string = "Email sent!";
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    //public forgetPwdService: ForgetPwdService
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('login');
  }

  success(){
    alert(alert);
  }

  // public sendValidationEmail():void{
  //   this.forgetPwdService.sendValidationEmail(this.user.email)
  //     .subscribe(
  //       data => {
  //         this.message = data.message;
  //         this.messgeType = "success";
  //       },
  //       error => {
  //         this.message = error.messge;
  //         this.messgeType = "danger";
  //       }
  //     );
  // }

}
