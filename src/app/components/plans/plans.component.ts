import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlansService } from '../../services/plans/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans = {
    done: [],
    inProgress: []
  };

  constructor(
    private plansService: PlansService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.fetchPlans();
  }

  fetchPlans = () => {
    const userId = +this.route.snapshot.paramMap.get('id');

    this.plansService.fetchPlans(userId)
      .subscribe(plans => {
        for(const plan of plans) {
          plan.completed
            ? (this.plans.done.push(plan))
            : (this.plans.inProgress.push(plan));
        }
      });
  }

}
