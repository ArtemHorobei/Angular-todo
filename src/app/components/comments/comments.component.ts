import { Component, Input, OnInit } from '@angular/core';

import { CommentsService } from '../../services/comments/comments.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId: number;
  comments: Comment[] = [];
  isOpen = false;

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.fetchComments();
  }

  fetchComments() {
    this.commentsService.fetchComments(this.postId)
      .subscribe(comments => {
        this.comments = comments;
      });
  }

  toggleComments() {
    this.isOpen = !this.isOpen;
  }
}
