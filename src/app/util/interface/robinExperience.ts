export interface robinExperience {
    id: number | string;
    experience: string;
    role: string;
    date: string;
    description: string;
    responsibility: string;
    achievement: string[];
    evaluation?: string;
    jobLink: string;
    liveUrl?: string;
    isFeatured?: boolean;
    features?: string[];
    tags: string[];
    techStack: string[];

    additionalData?: { title: string; data: string[] }[];

    // id: number | string;
    // name: string;
    // description: string;
    // jobLink: string;
    // liveUrl?: string;
    // isFeatured?: boolean;
    // features?: string[];
    // tags: string[];
    // techStuff: string[];
    // additionalData?: { title: string; data: string[] }[];
}