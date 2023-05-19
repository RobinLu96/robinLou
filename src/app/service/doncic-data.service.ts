import { Injectable } from "@angular/core";
import { robinCollection } from "../util/interface/robinCollectingExperience";
import { DONCIC_DATA } from "../util/collection/lukadoncic.data";

@Injectable({
    providedIn: 'root'
})
export class DoncicCollectionService {

    constructor(){ }

    getDoncicCollection(): robinCollection[] {
        return DONCIC_DATA;
    }
}