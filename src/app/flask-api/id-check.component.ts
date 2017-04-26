import {Component, ViewChild} from '@angular/core';
import {SearchItemsService} from '../search-items.service';
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
  allSizes: any[] = [];
  sizesReceived:boolean = false;
  trackingItemId: string;

  // img_path: string = 'http://127.0.0.1:5000/get_image/';

  constructor(
      private searchItemsService: SearchItemsService,
      private dataService: DataService
  ) {}



  onMySubmit(){
      this.trackingItemId = this.idCheckForm.value.item_id;
      this.searchItemsService.sendServerRequest({item_id: this.trackingItemId},'/colors').subscribe(
      (response) => {
          console.log(response);
          // this.data_received = true;
          this.data = response;
          if (!response){
              this.data_received = false;
              this.hasError = true;
          }
      });
  }

    getAllSizes(item_id: string){
        this.trackingItemId = item_id;
        this.searchItemsService.sendServerRequest({item_id: item_id}, '/sizes').subscribe(
            (response) => {
                console.log(response);
                this.sizesReceived = true;
                this.allSizes = response;
            });
    }

}
