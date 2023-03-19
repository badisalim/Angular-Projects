import { Component, OnInit } from '@angular/core';
import { BIRDS } from './birds';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {
  birds = BIRDS;
  constructor() { }

  ngOnInit() {
  }

}
