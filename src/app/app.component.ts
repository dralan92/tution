import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import{ MediaObserver, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tution';
  mediaSub:Subscription = new Subscription();
  deviceXs:boolean = false;
  constructor(public mediaObserver:MediaObserver) {
   
  }

  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias==='xs'? true:false;
    });
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  } 

}
