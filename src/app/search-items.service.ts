import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {baseBuildCommandOptions} from "@angular/cli/commands/build";

@Injectable()
export class SearchItemsService {

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

  sendServerRequest(searched_data: Object, address: string){
    address.trim();
    console.log('Data sent' + searched_data);
    const serverURL = 'http://127.0.0.1:5000/' + address;
    const body: Object = searched_data;
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers, method: "post"});
    return this.http.post(serverURL , JSON.stringify(body))
      .map((response: Response) => response.json())
  }

  searchData(searched_data: string){
    const body = {"searched_item": searched_data};
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers, method: "post"});
    return this.http.post('http://127.0.0.1:5000/search', JSON.stringify(body))
      .map((response: Response) => response.json())
  }

  getColors(){
    const headers: Headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // const options = new RequestOptions({headers: headers, method: "post"});
    return this.http.post('http://127.0.0.1:5000/colors','')
      .map((response: Response) => response.json())
  }

}
