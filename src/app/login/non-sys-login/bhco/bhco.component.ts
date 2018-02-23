import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import {User} from '../../../bz-modules/models/user-model';


@Component({
  selector: 'bhco',
  templateUrl: './bhco.component.html',
  styleUrls: ['./bhco.component.scss']
})
export class BhcoComponent implements OnInit {
  private title:string = "BHCO";
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
