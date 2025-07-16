import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import {Profile} from "./entities/profile.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ProfileService {

  constructor(@InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,) {
  }


  async create(createProfileDto: CreateProfileDto) {
    try {
      const profile = await this.profileRepository.save(createProfileDto);
      return {
        message: 'success',
        data: profile,
      };
    } catch (err){
      throw new InternalServerErrorException(err);
    }
  }

  async findAll({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    try {
      const [data, total] = await this.profileRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      return {
        message: 'Profiles retrieved successfully',
        data,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findOne(id: string) {
    try {
      const profile = await this.profileRepository.findOne({ where: { id } });
      if (!profile) {
        throw new NotFoundException();
      }
      return {
        message: 'success',
        data: profile,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    try {
      const result = await this.profileRepository.update(id, updateProfileDto);
      if (!result) {
        throw new NotFoundException();
      }
      const updatedProfile = await this.profileRepository.findOne({ where : {id}});
      return {
        message: 'success',
        data: updatedProfile,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async remove(id: string) {
    try {
      const result = await this.profileRepository.delete(id);
      if (!result) {
        throw new NotFoundException();
      }
      return {
        message: 'success',
        data: result,
      }
    }
    catch (e) {
      throw new InternalServerErrorException(e);
    }
  }


  async findByEmail(email: string) {
    try {
      const profile = await this.profileRepository.findOne({ where: { email } });
      if (!profile) {
        throw new NotFoundException();
      }
      return {
        message: 'success',
        data: profile,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

}
