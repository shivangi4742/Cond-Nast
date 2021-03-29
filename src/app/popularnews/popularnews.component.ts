import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-popularnews',
  templateUrl: './popularnews.component.html',
  styleUrls: ['./popularnews.component.css']
})
export class PopularnewsComponent implements OnInit {
  mArticles!: Array<any>;
  mSources!: Array<any>;

  constructor(private newsapi: NewsApiService) {}
  
  ngOnInit() {
    this.newsapi.getTechCrunch().subscribe((data:any) => this.mArticles = data['articles']);
    this.newsapi.getSourceFromLanguage().subscribe((data:any) => this.mSources = data['sources']);
  }

  searchArticles(source: any) {
    this.newsapi.getTopheadlinesFromSource(source).subscribe((data: any) => this.mArticles = data['articles']);
  }

}
