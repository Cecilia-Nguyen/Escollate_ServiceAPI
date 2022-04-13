import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { Organization, OrganizationDocument } from './schemas/organization.schema';

@Injectable()
export class OrganizationService {
    constructor(@InjectModel(Organization.name) private readonly model: Model<OrganizationDocument>) {}
    async findAllOrganization(): Promise<Organization[]> {
        return await this.model.find().exec();
    }

    async findOneOrganization(id: string): Promise<Organization> {
        return await this.model.findById(id).exec();
    }

    async createOrganization(createOrganizationDto: CreateOrganizationDto): Promise<Organization> {
        return await new this.model({
          ...createOrganizationDto,
        }).save();
    }

    async deleteOrganization(id: string): Promise<Organization> {
        return await this.model.findByIdAndDelete(id).exec();
    }

}
