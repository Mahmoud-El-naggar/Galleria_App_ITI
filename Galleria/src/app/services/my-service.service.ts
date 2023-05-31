import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})

export class MyServiceService {
  private BaseUrl = "http://jsonplaceholder.typicode.com";
  constructor(private myClient: HttpClient) { }
  
  private static _user: any;
  
  public static get user(): any {
    return this._user;
  }
  public static set user(value: any) {
    this._user = value;
  }

  GetAllUsers(){ return this.myClient.get(`${this.BaseUrl}/users`)}
  GetUser(_Id:any) {return this.myClient.get(`${this.BaseUrl}/users/${_Id}`)}

  GetAllAlbums() {return this.myClient.get(`${this.BaseUrl}/albums`)}
  GetAlbum(_Id:any) {return this.myClient.get(`${this.BaseUrl}/albums/${_Id}`)}

  GetAllPhotos() {return this.myClient.get(`${this.BaseUrl}/photos`)}
  GetPhotos(_Id:any) {return this.myClient.get(`${this.BaseUrl}/photos/${_Id}`)}

}
