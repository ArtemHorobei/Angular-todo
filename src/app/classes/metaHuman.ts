import { getRandomId } from '../utils';

export class MetaHuman {
  id: number;
  name: string;
  weapon: string;
  level: number;

  constructor(name: string, weapon: string, level: number) {
    this.id = getRandomId();
    this.name = name;
    this.weapon = weapon;
    this.level = level;
  }

  attack(damage: number = 0, metaHuman: MetaHuman) {
    console.log(`${this.name} attack ${metaHuman.name}`);
  }
}
