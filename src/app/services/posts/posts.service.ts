import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../../classes/post';
import { configAPI } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }
  fetchPosts(userId): Observable<Post> {
    return this.http.get(`${configAPI.baseUrl}${configAPI.entities.posts}?userId=${userId}`);
  }
}