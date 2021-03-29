import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key: string = environment.news_api.api_key;

  constructor(private http: HttpClient) {}
  getSourceFromLanguage() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
 }

 getTechCrunch() {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
 }

 getTopheadlinesFromSource(source: String) {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
 }
}
