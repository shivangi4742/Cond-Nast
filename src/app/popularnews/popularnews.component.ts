import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-popularnews',
  templateUrl: './popularnews.component.html',
  styleUrls: ['./popularnews.component.css']
})
export class PopularnewsComponent implements OnInit {
  articlesList!: Array<any>;
  sourcesList!: Array<any>;

  constructor(private newsapi: NewsApiService) {}
  
  ngOnInit() {
    this.newsapi.getTechCrunch().subscribe((data:any) => this.articlesList = data['articles']);
    this.newsapi.getSourceFromLanguage().subscribe((data:any) => this.sourcesList = data['sources']);
  }

  searchArticles(source: any) {
    this.newsapi.getTopheadlinesFromSource(source).subscribe((data: any) => this.articlesList = data['articles']);
  }

}
