import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../classes/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private postsService: PostsService,
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

}
