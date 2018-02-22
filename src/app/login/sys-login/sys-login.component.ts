import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import {User} from '../../bz-modules/models/user-model';

@Component({
  selector: 'sys-login',
  templateUrl: './sys-login.component.html',
  styleUrls: ['./sys-login.component.scss']
})
export class SysLoginComponent implements OnInit {

  public user: User = new User();

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {

  }

  login() {
    this.router.navigateByUrl('workspace');
  }

  forgetPwd() {

  }

  back() {
    this.router.navigateByUrl('login');
  }

}
