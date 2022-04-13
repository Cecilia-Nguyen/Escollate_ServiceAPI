import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeaModule } from './idea/idea.module';
import { OrganizationModule } from './organization/organization.module';
import { ProblemModule } from './problem/problem.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    
    MongooseModule.forRoot('mongodb+srv://admin-Cecilia:Cr020199@cluster0.nazzt.mongodb.net/iService?retryWrites=true&w=majority'),
    UserModule,
    OrganizationModule, 
    ProblemModule, 
    IdeaModule],
})
export class AppModule {}
