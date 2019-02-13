import { Component, OnInit, Input } from '@angular/core';

import { Plan } from '../../../models/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  @Input() plan: Plan;
  constructor() { }

  ngOnInit() {}

}
