import { Component, OnInit } from '@angular/core';
import {SearchItemsService} from "../../search-items.service";


@Component({
  selector: 'sr-add-search',
  templateUrl: './add-search.component.html',
  styles: []
})
export class AddSearchComponent{
  response_is_ok: boolean = false;

  constructor(private searchService: SearchItemsService) { }

  onSendSearch(searched_item: string){

    this.searchService.sendServerRequest(searched_item,"some_address").subscribe(
      (results: any) =>  {
        console.log(results);
        if (results.status == 'ok'){
          console.debug('Response is Ok!')
        }
      });
  }

}
