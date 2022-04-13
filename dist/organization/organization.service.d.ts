import { Model } from 'mongoose';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { Organization, OrganizationDocument } from './schemas/organization.schema';
export declare class OrganizationService {
    private readonly model;
    constructor(model: Model<OrganizationDocument>);
    findAllOrganization(): Promise<Organization[]>;
    findOneOrganization(id: string): Promise<Organization>;
    createOrganization(createOrganizationDto: CreateOrganizationDto): Promise<Organization>;
    deleteOrganization(id: string): Promise<Organization>;
}
