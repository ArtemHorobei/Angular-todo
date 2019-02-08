import { MetaHuman } from './metaHuman';

export class Villain extends MetaHuman{
  gift: string;

  constructor(name: string, weapon: string, level: number, gift: string) {
    super(name, weapon, level);
    this.gift = gift;
  }
}
