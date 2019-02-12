import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlansService } from '../../services/plans/plans.service';
import { Plan } from '../../classes/plan';

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
        for(let plan of plans) {
          plan.completed
            ? (this.plans.done.push(plan))
            : (this.plans.inProgress.push(plan));
        }
      });
  }

}










export class PostsComponent implements OnInit {
  posts: Post[] = [];
  comments: Comment[] = [];

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    const userId = +this.route.snapshot.paramMap.get('id');

    this.postsService.fetchPosts(userId)
      .subscribe(posts => this.posts = posts);
  }

  fetchComments = (postId) => {
    this.commentsService.fetchComments(postId)
      .subscribe(comments => this.comments = comments);
  }
}
