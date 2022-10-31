import { APP_NAME } from 'src/app/app.provider';

import { Component, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLinkWithHref],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  appName = inject(APP_NAME);
}
