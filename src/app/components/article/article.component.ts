import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  @Input() article :Article;

  constructor() {

      }

  ngOnInit() {
  }
  voteUp(){
    this.article.vote +=1;
    return false;
  }
  voteDown() {
    this.article.vote -= 1;
    return false;
  }
}
