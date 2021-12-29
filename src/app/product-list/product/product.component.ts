import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from '../../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product: any

  constructor(private location:Location,
              private _activatedRoute: ActivatedRoute,
              private _router: Router){

  }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(
      (params) => {
        this.product = this.location.getState();
      })
  }
}
