import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";


@Injectable()
export class SearchItemsService {
  baseServerUrl: string = 'http://127.0.0.1:5000';
  userToken: string ='';

  constructor(private http: Http) { }


  getResultsData() {
    return this.http.get('http://127.0.0.1:5000')
      .map((response: Response) => response.json())
      .catch(this.errorHandle);
  }

  private errorHandle(error: any) {
    console.log(error);
    return Observable.throw(error.json())
  }

  sendServerRequest(sending_data: Object, address: string){
    address.trim();
    sending_data['token'] = this.userToken;
    const serverURL = this.baseServerUrl + address;
    console.log('Send Data Logging:' + JSON.stringify(sending_data) );
    const body: Object = sending_data;
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers, method: "post"});
    return this.http.post(serverURL , JSON.stringify(body))
      .map((response: Response) => response.json())
  }

  getColors(searched_id: string){
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers, method: "post"});
    return this.http.post('http://127.0.0.1:5000/colors','')
      .map((response: Response) => response.json())
  }
  //
  // getAllSizes(searched_id: string){
  //   const headers: Headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   const options = new RequestOptions({headers: headers, method: "post"});
  //   return this.http.post('http://127.0.0.1:5000/sizes','')
  //       .map((response: Response) => response.json())
  // }


}
