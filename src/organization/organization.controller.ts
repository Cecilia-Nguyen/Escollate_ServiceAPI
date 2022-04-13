import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationService } from './organization.service';
  

@Controller('organization')
export class OrganizationController {

    constructor(private readonly service: OrganizationService) {}

    @Get()
    async index() {
      return await this.service.findAllOrganization();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOneOrganization(id);
    }
  
    @Post()
    async create(@Body() createOrganizationDto: CreateOrganizationDto) {
      return await this.service.createOrganization(createOrganizationDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.deleteOrganization(id);
    }
  }
  
