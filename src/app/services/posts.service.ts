import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts() {
    let apiUrl = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(apiUrl);
  }
}
