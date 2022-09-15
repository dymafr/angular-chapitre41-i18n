import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = $localize`:@@website-hello:I am a website`;
  today = new Date();
  x = 0;
  gender = 'male';

  inc(sign: '+' | '-') {
    if (sign === '+') {
      this.x++;
    } else {
      this.x--;
    }
  }

  switchLang(lang: 'fr' | 'en') {
    if (location.pathname.startsWith('/en') && lang === 'fr') {
      location.href = '/fr';
    } else if (location.pathname.startsWith('/fr') && lang === 'en') {
      location.href = '/en';
    }
  }
}
