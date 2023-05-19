//This file we need to think about what do we need for all the experience features
import { environment } from "../../environments/environment";
import { robinExperience } from "./interface/robinExperience";
import { testUniqueness } from "./test-unique";

//WorkExperience
import { dstWorkData } from "./experience/work-experience/dst-work.data";
import { ibmWorkData } from "./experience/work-experience/ibm-work.data";
import { kicks4LoveWorkData } from "./experience/work-experience/kicks4love-work.data"; 
import { toyotaWorkData } from "./experience/work-experience/toyota-work.data";
import { uwWorkData } from "./experience/work-experience/uw-work.data";
import { mdbWorkData } from "./experience/work-experience/mdb-work.data";


const getAllJob = () => {
    const jobs = [
        ibmWorkData,
        dstWorkData,
        toyotaWorkData,
        kicks4LoveWorkData,
        uwWorkData,
        mdbWorkData
    ];

    if(!environment.production){
        const result = testUniqueness(jobs, job => job.id);
        if(result.error){
            const errorLog = [];
            result.duplicates.forEach((job: robinExperience) => {
                // errorLog.push(`Duplicate E-id ${job.id} of ${job.name} `);
                errorLog.push(`Duplicate E-id ${job.id} of ${job.experience} `);
            });
            throw new Error(JSON.stringify(errorLog));
        }
    }
    return jobs;
};

export const ALL_PROJECT_DATA = getAllJob();