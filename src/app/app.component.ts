import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private renderer: Renderer2) {
  }
  
  ngOnInit(){
    this.addJsToElement('src/assets/scripts/classie.js').onload = (teste) => {
      console.log(teste)
  }
  }
  
  addJsToElement(src: string): HTMLScriptElement {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      this.renderer.appendChild(document.body, script);
      return script;
    }
}
