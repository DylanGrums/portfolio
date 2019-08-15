import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title1 = true;

  constructor() { }

  ngOnInit() {
  }

  switchTitle() {
    this.title1 = !this.title1
    console.log(this.title1)
  }
}
