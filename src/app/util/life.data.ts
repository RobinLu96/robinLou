//This file we need to think about what do we need for all the experience features
import { environment } from "../../environments/environment";
import { robinLifeExperience } from "./interface/robinLifeExperience";
import { testUniqueness } from "./test-unique";

//All life Experience
import { canadaExpoData } from "./experience/life-experience/canadaexpo.data";
import { clevelandData } from "./experience/life-experience/cleveland.data";
import { dallasMavsData } from "./experience/life-experience/dallas-mavs.data";
import { detroitData } from "./experience/life-experience/detroit.data";
import { lockerRoomData } from "./experience/life-experience/lockerroom.data";
import { nationalData } from "./experience/life-experience/national.data";
import { parisData } from "./experience/life-experience/paris.data";
import { rockyMountainData } from "./experience/life-experience/rokeyMountain.data";
import { rookieData } from "./experience/life-experience/rookie.data";
import { warriorsData } from "./experience/life-experience/sfransico.data";
import { texasData } from "./experience/life-experience/texas.data";
import { raptorsData } from "./experience/life-experience/raptors.data";

const getAllLife = () => {
    const lives = [
        canadaExpoData,
        clevelandData,
        dallasMavsData,
        detroitData,
        lockerRoomData,
        nationalData,
        parisData,
        rockyMountainData,
        rookieData,
        warriorsData,
        texasData,
        raptorsData
    ];
    if(!environment.production){
        const result = testUniqueness(lives, life => life.id);
        if(result.error){
            const errorLog = [];
            result.duplicates.forEach((life: robinLifeExperience) => {
                errorLog.push(`Duplicate E-id ${life.id} of ${life.experience} `)
            });
            throw new Error(JSON.stringify(errorLog));
        }
    }
    return lives;
};
export const ALL_LIFE_DATA = getAllLife();