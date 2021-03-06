import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ARTICLES } from '../mock-article';
import { ArticleService } from '../services/article.service';
import { SharedService } from '../services/shared.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
article: Article = new Article();
  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private router: Router,
              private titleService: Title,
              private sharedService: SharedService,
              private meta: Meta
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
         this.titleService.setTitle(`${this.article.title} - ${this.sharedService.blogTitle}`
         );
         this.meta.addTags([
          {name: 'description', content: this.article.description},
          {property: 'og:title', content: this.article.title},
          {property: 'og:description', content: this.article.description},
          {property: 'og:image', content: this.article.imageUrl},
          {property: 'og:site_name', content: this.sharedService.blogTitle}
        ]);
       }
        );
    });
  }



}
