import {Component, Input, ViewChild} from '@angular/core';
import {SearchItemsService} from "../../search-items.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'sr-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent {
  @Input('received-data') data: any[] = [];
  @Input('id') searched_id: string;
  @ViewChild('sizeForm') sizeForm: NgForm;
  item_sizes:any[] = [];
  title: string = 'Results';

  constructor(private searchService: SearchItemsService){}



  isSoldOut(text_item: string) : boolean {
    return text_item.search('Sold Out') > 0
  }

  onAddTracking(sizeChosen:any){
    this.item_sizes = this.data[0].size_options;


    for(let size of this.item_sizes){

      if(size.size == sizeChosen.value){
        this.searchService.sendServerRequest({id:this.searched_id, size:this.sizeForm.value.sizes},'add_search' ).subscribe(
          (result:any) => {
            console.log(result)
          }
        );
      }
    }

  }

  onCheckSizes(id: string){
    this.searchService.sendServerRequest(id, 'check_sizes').subscribe(
      (result:any)=> {
        console.log(result);
        this.item_sizes = result;
      }
    );
  }






}
