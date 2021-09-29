import { Photo } from './../interfaces/photo';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PhotoBoardService{
  private _URL = 'http://localhost:3000/photos'
  constructor(
    private http : HttpClient
  ){}
  public getPhotos(): Observable<Photo[]>{
    return this.http.get<Photo[]>(this._URL)
  }
}
