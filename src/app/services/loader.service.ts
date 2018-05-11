import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private subject = new Subject();
  public status = this.subject.asObservable();

  constructor() {
  }

  public show() {
    console.log('show');
    this.display(true);
  }

  public hide() {
    console.log('hide');
    this.display(false);
  }

  private display(loading: boolean) {
    this.subject.next(loading);
  }
}
