import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  features$ = new BehaviorSubject([
    {
      title: 'Standalone components',
      path: 'standalone-components',
    },
    {
      title: 'Typed forms',
      path: 'typed-forms',
    },
  ]);
}
