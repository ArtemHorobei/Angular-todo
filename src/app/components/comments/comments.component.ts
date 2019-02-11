import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentsService } from '../../services/comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  postId: number;

  constructor(
    private commentsService: CommentsService,
    private route: ActivatedRoute,
    postId: number,
  ) {
    this.postId = postId;
  }

  ngOnInit() {
    this.fetchComments();
  }

  fetchComments = () => {
    this.commentsService.fetchComments(this.postId)
      .subscribe(comments => this.comments = comments);
  }
}
