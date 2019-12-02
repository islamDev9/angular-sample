import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {

  constructor(private http: HttpClient) { }
  getPostDetails(id: number) {
    let apiUrl = "https://jsonplaceholder.typicode.com/posts/" + id;
    return this.http.get(apiUrl);
  }
  getPostComments(id: number) {
    let commentsApi = "https://jsonplaceholder.typicode.com/comments?postId=" + id;
    return this.http.get(commentsApi);
  }
}
