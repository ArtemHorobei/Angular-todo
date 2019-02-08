import { Component, OnInit } from '@angular/core';

import { Villain } from '../classes/villain';
import { getRandomId } from '../utils';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {
  villains: Villain[] = [
    new Villain('Magneto', 'Magnet', 1, 'Lie'),
    new Villain('Ultron', 'Stone', 3, 'Lie'),
    new Villain('Dr. Octopus', 'Claws', 5, 'Lie'),
    new Villain('Thanos', 'Glove', 9, 'Lie'),
  ];

  constructor() { }

  ngOnInit() {}

}
