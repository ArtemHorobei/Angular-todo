import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from '../../classes/comment';
import { configAPI } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private http: HttpClient) { }
  fetchComments(postId): Observable<Comment> {
    return this.http.get(`${configAPI.baseUrl}${configAPI.entities.comments}?postId=${postId}`);
  }
}
