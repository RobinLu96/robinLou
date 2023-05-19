import { Injectable } from "@angular/core";
import { robinInterest } from "../util/interface/robinInterest";
import { INTEREST_DATA } from "../util/interest.data";

@Injectable({
    providedIn: 'root'
  })
  export class InterestService {
  
    constructor() { }
  
    getInterest(): robinInterest[] {
      return INTEREST_DATA;
    }
}