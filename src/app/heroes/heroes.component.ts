import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../classes/hero';
import { getRandomId } from '../utils';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(
        heroes =>
          this.heroes = heroes
            .heroesList
            .map(
              hero =>
                new Hero(hero.name, hero.weapon, hero.level, hero.ability)
            )
      );
  }
}


