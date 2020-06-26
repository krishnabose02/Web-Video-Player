import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../models/searchResponse';

@Injectable({
  providedIn: 'root'
})
export class RestService {
// private baseUrl = 'https://theaterplus.xyz/api/';
// private baseUrl = 'http://localhost:5000/api/';
private baseUrl = 'https://cors-anywhere.herokuapp.com/https://theaterplus.xyz/api2/';
private vid: string;
  constructor(private http: HttpClient) {
  }

  setVidPath(path: string) {
    this.vid = path;
  }

  getVidPath() {
    return this.vid;
  }

  searchContent(data: string, page: number) {
    const callingurl = this.baseUrl
    + 'get_search_results/'
    + '?api_key=new11uT8cBLzm6a1YvsiUWOEgrFowk95K2DM3tHAPRCX4ypGjN'
    + '&count=10'
    + '&page=' + page
    + '&search=' + data;
    return this.http.get(
      callingurl,
      {headers: {Origin: 'theaterplus.xyz'}, responseType: 'text'}
    ).toPromise();
  }
}
