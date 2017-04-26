import {Component, Input, OnInit} from '@angular/core';
import {SearchItemsService} from "../search-items.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-send-to-tracking',
  templateUrl: './send-to-tracking.component.html',
  styles: []
})
export class SendToTrackingComponent implements OnInit {

  @Input('all-sizes') allSizes: any[];
  @Input('tracking-id') trackingId: string;

  constructor(private searchItemsService: SearchItemsService) { }

  ngOnInit() {
  }

  onAddSizeToTrack(sizesForm: NgForm){
    const request_body = {
      "item_id": this.trackingId,
      "size": sizesForm.value.size };
    console.log(request_body);
    console.log(JSON.stringify(request_body));
    this.searchItemsService.sendServerRequest(request_body, '/add_item_to_track')
      .subscribe(
        (response) => {
          console.log(response);
          console.log(response.status)
        });
    // this.searchItemsService.sendServerRequest(request_body, '/add_item_to_track')
  }



}
