import { Component } from '@angular/core';
import { Article } from './components/article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
 sortedArticles(): Article[]{
   return this.articles.sort((a:Article,b:Article)=>b.vote-a.vote);
 }

  constructor(){
    this.articles = [
      new Article('Angular 2', 'http://anuglar.io', 10),
      new Article('Full Stack', 'http://fullstack.io', 20),
      new Article('Angular Home', 'http://anuglar.io', 5),
      new Article('NodeJs', 'http://nodejs.com', 3)
    ]
  }
addArticle(title: HTMLInputElement, link:HTMLInputElement): boolean {
console.log(`Title = ${title.value} and Link = ${link.value}`);
this.articles.push(new Article(title.value, link.value));
title.value='';
link.value='';
  return false;
}
}
