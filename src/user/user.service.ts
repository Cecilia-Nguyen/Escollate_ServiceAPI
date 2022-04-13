import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}
    async findAllUser(): Promise<User[]> {
        return await this.model.find().exec();
    }

    async findOneUser(id: string): Promise<User> {
        return await this.model.findById(id).exec();
    }
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return await new this.model({
          ...createUserDto,
        }).save();
    }


    async deleteUser(id: string): Promise<User> {
        return await this.model.findByIdAndDelete(id).exec();
    }

}


