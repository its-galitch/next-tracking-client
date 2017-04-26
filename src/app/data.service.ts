import {Injectable} from "@angular/core";
import {Item, ItemWithAllSizes} from "./item";
import {SearchItemsService} from "./search-items.service";
/**
 * Created by יצחק ושרה on 25/04/2017.
 */
@Injectable()
export class DataService{
    itemsToTrack:Item[];
    itemForSelectSize: ItemWithAllSizes;
    some = new Item('136-654', 'Ex Large');
    accepted_items : any[];


    constructor(private searchItemsService: SearchItemsService){}

    // getColors(){
    //     this.searchItemsService.getColors().subscribe(
    //         (result) => {
    //             console.log(result);
    //             this.accepted_items = result;
    //         });
    /* }*/

    addItemToTrack(item: any){
        this.itemsToTrack.push(item);

    }
}