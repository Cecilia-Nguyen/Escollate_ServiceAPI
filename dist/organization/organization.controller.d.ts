import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationService } from './organization.service';
export declare class OrganizationController {
    private readonly service;
    constructor(service: OrganizationService);
    index(): Promise<import("./schemas/organization.schema").Organization[]>;
    find(id: string): Promise<import("./schemas/organization.schema").Organization>;
    create(createOrganizationDto: CreateOrganizationDto): Promise<import("./schemas/organization.schema").Organization>;
    delete(id: string): Promise<import("./schemas/organization.schema").Organization>;
}
