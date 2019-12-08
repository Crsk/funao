import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'fun-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  users: User[] = []
  users$$: Subscription

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$$ = this.userService.getUsers().subscribe(users => this.users = users)
  }

  ngOnDestroy() {
    if (this.users$$) this.users$$.unsubscribe()
  }

}
