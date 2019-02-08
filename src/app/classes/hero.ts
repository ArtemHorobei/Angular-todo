import { MetaHuman } from './metaHuman';

export class Hero extends MetaHuman{
  ability: string;

  constructor(name: string, weapon: string, level: number, ability: string) {
    super(name, weapon, level);
    this.ability = ability;
  }
}
