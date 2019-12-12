import { FunaService } from './../../shared/services/funa.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Funa } from 'src/app/shared/models/funa';

@Component({
  selector: 'fun-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  users: User[] = []
  users$$: Subscription

  funas: Funa[] = []
  funa$$: Subscription

  constructor(
    private userService: UserService,
    private funaService: FunaService,
  ) { }

  ngOnInit() {
    this.users$$ = this.userService.getUsers().subscribe(users => this.users = users)
    this.funa$$ = this.funaService.getFunas().subscribe(funas => this.funas = funas)
  }

  ngOnDestroy() {
    if (this.users$$) this.users$$.unsubscribe()
    if (this.funa$$) this.funa$$.unsubscribe()
  }

}
