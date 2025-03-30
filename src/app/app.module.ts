import { NgModule } from '@angular.core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { DetalhePostComponent } from './detalhe-post/detalhe-post.component';
import { FormularioComentarioComponent } from './formulario-comentario/formulario-comentario.component';

@NgModule({
    declarations: [
        AppComponent, 
        ListaPostsComponent,
        DetalhePostComponent, 
        FormularioComentarioComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }