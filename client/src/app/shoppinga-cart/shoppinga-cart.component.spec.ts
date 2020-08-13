import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingaCartComponent } from './shoppinga-cart.component';

describe('ShoppingaCartComponent', () => {
  let component: ShoppingaCartComponent;
  let fixture: ComponentFixture<ShoppingaCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingaCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
