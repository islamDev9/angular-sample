import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.css']
})
export class PostsHomeComponent implements OnInit {
  posts: any = [];
  p: number = 1;
  constructor(private _postsService: PostsService) { }
  getAllPosts() {
    this._postsService.getPosts().subscribe(allPosts => {
      this.posts = allPosts;
    })
  }
  ngOnInit() {
    this.getAllPosts();
  }

}
