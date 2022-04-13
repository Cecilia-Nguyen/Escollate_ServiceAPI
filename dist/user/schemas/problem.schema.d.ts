/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type ProblemDocument = Problem & Document;
export declare class Problem {
    category: string;
    departments: string[];
    isAnomymous: boolean;
    title: string;
    detail: string;
    evidence: string;
    attachments: string[];
    importanceRatings: number;
    importanceTimes: number;
    urgencyRatings: number;
    urgencyTimes: number;
}
export declare const UserSchema: import("mongoose").Schema<Document<Problem, any, any>, import("mongoose").Model<Document<Problem, any, any>, any, any, any>, {}, {}>;
