import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';
import TypeIt from 'typeit';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public name = "Hi, i'm Kiase,";
  public job = "Graphic designer";

  public namesplit = this.name.split('');
  public jobsplit = this.job.split('');


  constructor() { }

  ngOnInit() {
    
  }

  over(event) {
    event.target.classList.add('anim');
    setTimeout(() => {
      event.target.classList.remove('anim');
    }, 800);
  }

}
