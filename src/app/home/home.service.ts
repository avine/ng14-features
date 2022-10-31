import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  features$ = new BehaviorSubject(['Standalone components', 'Typed forms']);
}
