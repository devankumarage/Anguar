import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private  httpClient:  HttpClient) { }

  getContacts(){
    return  this.httpClient.get(`${this.API_URL}/posts`);
  }

  createContact(contact){
    return  this.httpClient.post(`${this.API_URL}/posts/`,contact);
  } 
}
