import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-gcp',
  templateUrl: './gcp.component.html',
  styleUrls: ['./gcp.component.css']
})
export class GcpComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.isFetching = true;
    console.log('GCP making get request...')
    this.postService.fetchGcpPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }
}
