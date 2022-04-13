import * as mongoose from 'mongoose';
import { Idea } from 'src/idea/schemas/idea.schema';
import { Organization } from 'src/organization/schemas/organization.schema';
import { Problem } from 'src/problem/schemas/problem.schema';
export declare type UserDocument = User & Document;
export declare class User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    userType: string;
    organization: Organization;
    problem: Problem[];
    idea: Idea[];
    email: string;
    address: string;
    phoneNumber: string;
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<User, any, any>, mongoose.Model<mongoose.Document<User, any, any>, any, any, any>, {}, {}>;
