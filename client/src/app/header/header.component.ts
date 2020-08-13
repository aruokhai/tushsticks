import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { merge, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  @Input() snav:any;
  public menu: boolean;
  private menuChange$ : Observable<void>;
  private menuChangeSub: Subscription;
  @Input() public openCheckout: Function;
  constructor() { 
    this.menu = false;
  }

  ngOnInit(): void {
    this.menuChange$ = merge(this.snav.openedStart,this.snav.closedStart);
    this.menuChangeSub = this.menuChange$.subscribe(() => {this.changeMenu()}); 
    console.log(this.openCheckout);
    
  }
 
   ngOnDestroy(): void {
     this.menuChangeSub.unsubscribe();
   }
  changeMenu(){
      if (this.menu == false){
        this.menu = true;
        console.log(this.menu);
      }
      else {
        this.menu = false;
        console.log(this.menu)
      }
  }
  changeMenuIcon(){
    this.snav.toggle();
   
  }

  checkout(){
    this.openCheckout();
  }

}
