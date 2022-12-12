import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FooterComponent } from '../shared/components/footer/footer.component';
import { HomeService } from './home.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, DatePipe, NgFor, RouterLink, RouterOutlet, FooterComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected now = Date.now();

  protected features$ = inject(HomeService).features$;
}
