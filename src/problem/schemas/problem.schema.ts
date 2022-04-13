import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProblemDocument = Problem & Document;

@Schema()
export class Problem {
  @Prop({ type: String })
  category: string;

  @Prop({ type: [String] })
  departments: string[];

  @Prop({ type: Boolean })
  isAnomymous: boolean;
  
  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  detail: string;

  @Prop({ type: String })
  evidence: string;

  @Prop({ type: [String] })
  attachments: string[];

  @Prop({ type: Number })
  importanceRatings: number;

  @Prop({ type: Number })
  importanceTimes: number;

  @Prop({ type: Number })
  urgencyRatings: number;

  @Prop({ type: Number })
  urgencyTimes: number;

}

export const ProblemSchema = SchemaFactory.createForClass(Problem);
