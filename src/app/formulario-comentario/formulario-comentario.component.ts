import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-formulario-comentario',
  templateUrl: './formulario-comentario.component.html',
  styleUrls: ['./formulario-comentario.component.scss']
})
export class FormularioComentarioComponent {
  @Input() postId: number | undefined;
  comentario: string = '';

  constructor(private postService: PostService) { }

  adicionarComentario(): void {
    if (this.postId) {
      this.postService.adicionarComentario(this.postId, this.comentario);
      this.comentario = '';
    }
  }
}