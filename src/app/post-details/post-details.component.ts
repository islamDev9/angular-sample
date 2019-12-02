import { Component, OnInit } from '@angular/core';
import { PostDetailsService } from '../services/post-details.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: number;
  post: any = [];
  comments: any = [];
  constructor(
    private detailsService: PostDetailsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params['id'];
    console.log(this.postId);
    this.detailsService.getPostDetails(this.postId).subscribe(postdetailes => {
      this.post = postdetailes;
      console.log(this.post);
    });
    this.detailsService.getPostComments(this.postId).subscribe(postComment => {
      this.comments = postComment;
      console.log(this.comments);
    })
  }
}
