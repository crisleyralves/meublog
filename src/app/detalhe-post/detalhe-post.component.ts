import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-detalhe-post',
  templateUrl: './detalhe-post.component.html',
  styleUrls: ['./detalhe-post.component.scss']
})
export class DetalhePostComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.post = this.postService.getPost(id);
    if(!this.post){
      console.log("Post não encontrado, com ID: " + id);
    }
  }
}