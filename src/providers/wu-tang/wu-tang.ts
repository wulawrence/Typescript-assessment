import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WuTangProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WuTangProvider {

  url = "dummyURL";

  constructor(public http: HttpClient) {
    console.log('Hello WuTangProvider Provider');
  }
   wuTangIs(){
    return "For the Children";
  }
  myFavoriteBand(){
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });
    return this.http.request(req);
  }
  newBandILike<T>(value: any){
    return this.http.post<T>('dummyURL', value);
  }
}
