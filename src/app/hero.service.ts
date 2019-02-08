import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Hero } from './classes/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get('./assets/heroes.json');
  }
}
