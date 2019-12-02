import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsHomeComponent } from './posts-home/posts-home.component'
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  { path: "", redirectTo: "/posts", pathMatch: "full" },
  { path: "posts", component: PostsHomeComponent },
  { path: "posts/:id", component: PostDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
