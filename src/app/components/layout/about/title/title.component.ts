import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';
import TypeIt from 'typeit';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public bool = false;
  public hellostring = "Hello, i'm Dylan Grumellon \n , front end developper";
  public test = this.hellostring.split('');


  constructor() { }

  ngOnInit() {
    new TypeIt('#breakLines', {
      strings: ["Bonjour, je m'appel Dylan Grumellon.", "Et je suis "],
      speed: 50,
      waitUntilVisible: true
    }).go();

    new TypeIt('#replaceStrings', {
      speed: 50,
      waitUntilVisible: true
    })
    .options({speed: 100})
    .type('Bonjour..')
    .pause(1000)
    .delete(2)
    .type(', Je m\'appel Dylan Grumellon.')
    .pause(1000)
    .type('Et je suis')
    .break()
    .pause(750)
    .type('développeur Angular')
    .options({speed: 700})
    .type('...')
    .pause(750)
    .options({speed: 50})
    .delete()
    .type('JE PREND 10K <strong>MINUTE</strong> :)')
    .go();
  }

  over(event) {
    event.target.classList.add('anim');
    setTimeout(() => {
      event.target.classList.remove('anim');
    }, 800);
  }

}
