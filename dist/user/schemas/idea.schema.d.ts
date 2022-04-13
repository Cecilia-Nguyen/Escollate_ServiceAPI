import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Problem } from 'src/user/schemas/problem.schema';
export declare type IdeaDocument = Idea & Document;
export declare class Idea {
    title: string;
    detail: string;
    evidence: string;
    attachments: string[];
    isAnomymous: boolean;
    problem: Problem;
}
export declare const UserSchema: mongoose.Schema<Document<Idea, any, any>, mongoose.Model<Document<Idea, any, any>, any, any, any>, {}, {}>;
