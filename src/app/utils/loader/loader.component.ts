import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader.interface';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit{
  
  showLoader= false;
  private subscription: Subscription
  constructor(
    private _loaderService:LoaderService
  ){

  }

  ngOnInit(): void {
      this.subscription = this._loaderService.LoaderState.
      subscribe((state:LoaderState)=>{
        this.showLoader = state.showLoader
      })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
