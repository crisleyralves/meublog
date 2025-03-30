import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { DetalhePostComponent } from './detalhe-post/detalhe-post.component';

const routes: Routes = [
    { path: '', component: ListPostComponent },
    { path: 'post/:id', component: DetalhePostComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }