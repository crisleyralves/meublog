import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      titulo: 'Meu Primeiro Post',
      conteudo: 'Este é o conteúdo do meu primeiro post.',
      comentarios: ['Ótimo post!', 'Adorei a leitura.']
    },
    {
      id: 2,
      titulo: 'Angular é Incrível',
      conteudo: 'Descubra como o Angular pode transformar o seu desenvolvimento Web.',
      comentarios: ['Show de bola!']
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: number): Post | undefined {
    console.log('ID recebido no serviço:', id);
    const post = this.posts.find(post => post.id === id);
    console.log('Post encontrado', post);
    return post;
  }

  adicionarComentario(postId: number, comentario: string): void {
    const post = this.getPost(postId);
    if (post) {
      post.comentarios.push(comentario);
    }
  }
}