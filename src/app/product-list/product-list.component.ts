import { Component, OnInit } from '@angular/core';

import { ApiService } from  '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
  }
  createContact(){

    var  contact  = {
        title:  "devan",
        body:  "Home N 333 Apartment 300",
        
    };
    this.apiService.createContact(contact).subscribe((response) => {
      console.log(response);
  });
  }
}
