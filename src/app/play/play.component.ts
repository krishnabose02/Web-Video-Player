import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
url: string;
  constructor(private rest: RestService,
              private router: Router) { }

  ngOnInit() {
    this.url = this.rest.getVidPath();
    if (!this.url) {
      this.router.navigateByUrl('/home');
    }
  }

}
