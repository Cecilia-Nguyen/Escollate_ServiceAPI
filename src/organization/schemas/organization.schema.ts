import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrganizationDocument = Organization & Document;

@Schema()
export class Organization {
  
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  phoneNumber: string;

}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
