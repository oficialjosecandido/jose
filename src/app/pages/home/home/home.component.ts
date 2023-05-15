// Core Module
import { Component, OnInit } from '@angular/core';

// Router Module
import { ActivatedRoute } from '@angular/router';

// RxJS
import { Observable } from 'rxjs';

// Interfaces
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';

// Services
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public user: IUser = { email: '', password: '' };
  public posts$: Observable<IPost[]> = new Observable<IPost[]>();
  public totalPosts: number = 30;
  public currentPage = 1;
  public postsPerPage = 5;

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getPostsPage();
  }

  private getUser(): void {
    const userString = sessionStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }
  }

  private getPostsPage(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = +params['page'] || 1;
      this.getPosts();
    });
  }

  private getPosts(): void {
    const start = (this.currentPage - 1) * this.postsPerPage;
    this.posts$ = this.postService.getPosts(start, this.postsPerPage);
  }

  public logout(): void {
    sessionStorage.clear();
  }
}
