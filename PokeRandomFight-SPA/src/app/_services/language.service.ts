import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  lang: string = 'fr';

  constructor() { }

  changeLang() {
    this.lang = this.lang === 'fr' ? 'en' : 'fr';
  }
}
