import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { SearchResponse, Post } from '../models/searchResponse';
import * as crypto from 'crypto-js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
search = '';
results: SearchResponse;
page = 1;
  constructor(private rest: RestService) { }

  async searchItem() {
    if (this.search === '') {
      return;
    }
    this.page = 1;
    const data = await this.rest.searchContent(this.search, this.page);
    console.log(data);

    const rawdata = data;
    const iv = rawdata.substring(0, 16);
    const cryptext = rawdata.substring(16);

    const plaintextarray = crypto.AES.decrypt(rawdata, 'badsmallbrownfox', {
      iv,
      mode: crypto.mode.CBC
    });

    // this.results = data;
  }

  async playContent(post: Post) {
    this.rest.setVidPath(post.channel_url);
  }

  async loadMore() {
    this.page ++;
    const data = await this.rest.searchContent(this.search, this.page);
    // this.results.posts.push(...data.posts);
  }

  ngOnInit() {
  }

}
