import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private router : Router){
  }
  ngOnInit(){
     
  }

  openCheckout() {
         return this.__openCheckout.bind(this);
  }
  __openCheckout(){
    this.router.navigate(['checkout']);
  }
}
