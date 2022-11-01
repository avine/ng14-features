import { APP_NAME } from 'src/app/app.provider';

import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected appName = inject(APP_NAME);
}
