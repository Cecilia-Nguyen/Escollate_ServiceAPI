import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Idea } from 'src/idea/schemas/idea.schema';
import { Organization } from 'src/organization/schemas/organization.schema';
import { Problem } from 'src/problem/schemas/problem.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, unique: true })
  username: string;
  
  @Prop({ type: String })
  password: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  userType: string;

  @Prop({ type:mongoose.Schema.Types.ObjectId, ref: 'Organization' })
  organization: Organization;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem' }] })  
  problem: Problem[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Idea' }] })  
  idea: Idea[];

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  phoneNumber: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
