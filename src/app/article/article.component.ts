import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ARTICLES } from '../mock-article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
article: Article = new Article();
  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private router: Router
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       const key = params.key;
       this.articleService.getArticle(key)
       .subscribe(article => {
         if (article === undefined){
           this.router.navigateByUrl('404');
           return;
         }
         this.article = article;
         console.log(this.article);
       }
        );
    });
  }



}
