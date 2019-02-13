import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PlansComponent } from './components/plans/plans.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './components/posts/post/post.component';
import { UserComponent } from './components/users/user/user.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { PlanComponent } from './components/plans/plan/plan.component';

import { reducers, metaReducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    PostsComponent,
    CommentsComponent,
    PlansComponent,
    PostComponent,
    UserComponent,
    CommentComponent,
    PlanComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SuiModule,
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    environment.imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
