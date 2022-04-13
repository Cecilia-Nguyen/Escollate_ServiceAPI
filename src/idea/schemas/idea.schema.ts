import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Problem } from 'src/problem/schemas/problem.schema';
export type IdeaDocument = Idea & Document;

@Schema()
export class Idea {
  
  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  detail: string;

  @Prop({ type: String })
  evidence: string;

  @Prop({ type: [String] })
  attachments: string[];

  @Prop({ type: Boolean })
  isAnomymous: boolean;

  @Prop({ type:mongoose.Schema.Types.ObjectId, ref: 'Problem' })
  problem: Problem;


}

export const IdeaSchema = SchemaFactory.createForClass(Idea);
