import {Component, ViewChild} from '@angular/core';
import {SearchItemsService} from '../search-items.service';
import { Response } from '@angular/http';
import { Observable}  from 'rxjs/Rx'
import {NgForm} from "@angular/forms";
import {DataService} from "../data.service";

@Component({
  selector: 'check-id',
  templateUrl: './id-check.component.html',
  styles: []
})
export class CheckIdBarComponent {
  @ViewChild('f') idCheckForm: NgForm;
  data: any[];
  hasError: boolean = false;
  data_received: boolean = false;
  // img_path: string = 'http://127.0.0.1:5000/get_image/';

  constructor(
      private searchService: SearchItemsService,
      private dataService: DataService
  ) {}



  onSendSearch(searched_item: string){
    this.data_received = false;
    this.searchService.searchData(searched_item).subscribe(
      (results: any) =>  {
        this.data = results;
        this.data_received = true;
        console.log(results)

      });
  }

  onMySubmit(){
      // console.log(this.idCheckForm.value);
      this.searchService.sendServerRequest(this.idCheckForm.value,'colors').subscribe(
      (response) => {
          console.log(response);
          this.data_received = true;
          this.data = response;
          if (response.error){
              this.hasError = true;
          }
      });
  }

  onGetColors(){
      this.dataService.getColors();
  }

}
