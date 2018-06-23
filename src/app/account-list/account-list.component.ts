import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  private  contacts1:  Array<object> = [];
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getContacts();
  }

  public  getContacts(){
    this.apiService.getContacts().subscribe((data:  Array<object>) => {
        this.contacts1  =  data;
        console.log(data);  
    });
  }
}
