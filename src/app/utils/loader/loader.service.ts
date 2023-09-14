import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from './loader.interface';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  LoaderState = this.loaderSubject.asObservable();
  constructor() { }

  showLoader() {
    this.loaderSubject.next(<LoaderState>{ showLoader: true })
  }

  hideLoader() {
    this.loaderSubject.next(<LoaderState>{ showLoader: false })
  }
}
