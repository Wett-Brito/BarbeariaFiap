import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  public products: any[] | undefined;

	constructor(private http: HttpClient) {}
	title = 'api-angular';

  ngOnInit() {
		this.http
			.get<any>('/services', {
			})
			.subscribe(data => {
        this.products = data
			});
	}
  
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/