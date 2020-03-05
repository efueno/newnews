import { NewsList} from './../news-main/news';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  private apiKey= environment.apiKey
  url='https://newsapi.org/v2/everything?domains=cnbc.com&pageSize=100&apiKey=';
  
  constructor(private http: HttpClient  ) { }

  public getAllNews(){
    
    return this.http.get<NewsList>('https://newsapi.org/v2/everything?domains=cnbc.com&pageSize=28&apiKey=b1acd075232d4657a2a62897bd08447e')
  }

  public getOneArticle(publishedAt){
    return this.http.get<NewsList>('https://newsapi.org/v2/everything?domains=cnbc.com&from='+publishedAt+'&to='+publishedAt+'&apiKey='+'b1acd075232d4657a2a62897bd08447e')

  }

 public getLast12Article(){
   return this.http.get<NewsList>('https://newsapi.org/v2/everything?domains=cnbc.com&pageSize=12&apiKey='+'b1acd075232d4657a2a62897bd08447e')
 }
}
