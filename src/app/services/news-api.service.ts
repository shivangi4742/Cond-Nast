import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey: string = environment.news_api.api_key;

  constructor(private http: HttpClient) {}

  getSourceFromLanguage() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey)
                    .pipe(catchError(this.handleError));
 }

 getTechCrunch() {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.apiKey)
                  .pipe(catchError(this.handleError));
 }

 getTopheadlinesFromSource(source: String) {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.apiKey)
                  .pipe(catchError(this.handleError));
 }

 handleError(error:HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}
