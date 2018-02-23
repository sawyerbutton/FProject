import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import {User} from '../../../bz-modules/models/user-model';

@Component({
  selector: 'com-member',
  templateUrl: './com-member.component.html',
  styleUrls: ['./com-member.component.scss']
})
export class ComMemberComponent implements OnInit {
  private title:string = "Community Member"
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
    this.router.navigateByUrl('forgetPwd')
  }

  back() {
    this.router.navigateByUrl('login');
  }

}
