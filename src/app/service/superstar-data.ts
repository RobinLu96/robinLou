import { Injectable } from "@angular/core";
import { robinCollection } from "../util/interface/robinCollectingExperience";
import { SUPERSTAR_DATA } from "../util/collection/superstars.data";

@Injectable({
    providedIn: 'root'
})
export class SuperStarCollectionService {

    constructor(){ }

    getSuperStarCollection(): robinCollection[] {
        return SUPERSTAR_DATA;
    }
}