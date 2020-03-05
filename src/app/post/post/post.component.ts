import { AuthService } from './../../services/auth.service';
import { Article, NewsList } from './../../news-main/news';
import { GetNewsService } from './../../services/get-news.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  article:Article;
  newsList: NewsList;
  constructor(private route:ActivatedRoute,
              private newsService: GetNewsService,
              public authService:AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id= params.get('id')
      this.getArticle(id)
    })

    this.getSomeNews()
  }

  getArticle(id){
    let publishedAt= id.slice(0, -1);
    
    this.newsService.getOneArticle(publishedAt).subscribe(response =>
    {
      this.article = response.articles[0]
     })

  }


  getSomeNews(){
    this.newsService.getLast12Article().subscribe(response=>{
      this.newsList=response
      console.log(this.newsList)
    })
  }
  subscribe(form){
    window.alert('Success')
      location.reload()
  }
}
