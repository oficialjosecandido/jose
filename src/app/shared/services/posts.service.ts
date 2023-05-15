// Core Module
import { Injectable } from '@angular/core';

// Http Client Module
import { HttpClient } from '@angular/common/http';

// RxJs
import { Observable } from 'rxjs';

// Interfaces
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public getPosts(startIndex: number, limit: number): Observable<IPost[]> {
    const url = `${this.API_URL}/posts?_start=${startIndex}&_limit=${limit}`;
    return this.http.get<IPost[]>(url);
  }

  public getPostDetails(postId: number): Observable<IPost> {
    const url = `${this.API_URL}/posts/${postId}`;
    return this.http.get<IPost>(url);
  }

}
