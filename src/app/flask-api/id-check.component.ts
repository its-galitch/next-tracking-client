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
  colors:{item_id:string, color: string}[]= [];
  item_image: string;

  hasError: boolean = false;
  colors_display: boolean = false;
  allSizes: any[] = [];
  sizesReceived:boolean = false;
  trackingItemId: string;



  constructor(
      private searchItemsService: SearchItemsService,
      private dataService: DataService
  ) {}



  onMySubmit(){
      this.trackingItemId = this.idCheckForm.value.item_id;
      this.searchItemsService.sendServerRequest({item_id: this.trackingItemId},'/colors').subscribe(
      (response:{colors_id:{color:string, id:string}[], item_image:string}) => {
          console.log(response);
          this.colors_display = true;
          this.item_image = response.item_image;
          console.log(response.colors_id);
        for (let item of response.colors_id){
          this.colors.push({'item_id': item.id, 'color': item.color});
          }
        if (!response){
              this.colors_display = false;
              this.hasError = true;
          }
      });
  }

    getAllSizes(item_id: string){
        this.trackingItemId = item_id;
        this.searchItemsService.sendServerRequest({item_id: item_id}, '/sizes').subscribe(
            (response:{item_image:string, sizes:string[]}) => {
                console.log(response);
                this.sizesReceived = true;
                this.item_image = response.item_image;
                this.allSizes = response.sizes;
            });
    }

}
