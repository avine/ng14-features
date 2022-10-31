import { Component } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  now = Date.now();

  features$ = this.homeService.features$;

  constructor(private homeService: HomeService) {}
}
