import { Injectable } from "@angular/core";
import { robinCollection } from "../util/interface/robinCollectingExperience";
import { MBAPPE_DATA } from "../util/collection/kylianmbappe.data"; 

@Injectable({
    providedIn: 'root'
})
export class MbappeCollectionService {
    
    constructor(){ }

    getMbappeCollection(): robinCollection[] {
        return MBAPPE_DATA;
    }
}