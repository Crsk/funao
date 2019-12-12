import { Funa } from './../../models/funa';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fun-funa',
  templateUrl: './funa.component.html',
  styleUrls: ['./funa.component.scss']
})
export class FunaComponent implements OnInit {

  @Input() funa: Funa

  constructor() { }

  ngOnInit() {
  }

}
