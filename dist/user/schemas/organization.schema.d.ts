/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type OrganizationDocument = Organization & Document;
export declare class Organization {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<Organization, any, any>, import("mongoose").Model<Document<Organization, any, any>, any, any, any>, {}, {}>;
