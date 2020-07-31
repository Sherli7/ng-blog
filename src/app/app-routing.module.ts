import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{path: 'articles', component: ArticleListComponent},
{path: '404', component: NotFoundComponent},
{path: 'about', component: AboutComponent},
{path: ':key', component: ArticleComponent},
{path: '', component: ArticleListComponent},
{path: '**', component: ArticleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
