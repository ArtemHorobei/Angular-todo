import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../../services/posts/posts.service';
import { CommentsService } from '../../services/comments/comments.service';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
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
