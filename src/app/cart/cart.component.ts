import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  showCartPage : boolean = false;

  toggleCartPage() {
    this.showCartPage = !this.showCartPage;
  };
  
  @Input()
  cartProductQuantity : number = 0;

  @Input()
  productsArr : Array<any> = [];

  ngOnInit() {
    let clickedProductsArr : any = localStorage.getItem('clickedProductsArr');
    if(clickedProductsArr) {
      this.cartProductQuantity = JSON.parse(clickedProductsArr).length;
    } else {
      this.cartProductQuantity = 0;
    };
  };
};