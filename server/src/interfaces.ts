
export interface Skill {
    id: string;
    name: string;
    yearsOfExperience: number;
}

export interface Job {
    id: string;
    name: string;
    yearsOfExperience: number;
}

export interface UserData {
    imageURL: string;
    name: string;
    skills: Skill[];
    currentJob: Job;
    previousJobs: Job[];
    showUpRate: number;
}