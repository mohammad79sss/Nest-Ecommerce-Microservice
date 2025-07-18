import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import {Review} from "./entities/review.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";



@Injectable()
export class ReviewService {

  constructor(@InjectRepository(Review) private readonly reviewRepository: Repository<Review>,) {
  }


  async create(createReviewDto: CreateReviewDto) {
    try {
      const review = await this.reviewRepository.save(createReviewDto);
      return {
        message: 'success',
        data: review,
      };
    } catch (err){
      console.log(err);
      throw new InternalServerErrorException(err);
    }
  }

  async findAll({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    try {
      const [data, total] = await this.reviewRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      return {
        message: 'Reviews retrieved successfully',
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
      const order = await this.reviewRepository.findOne({ where: { id } });
      if (!order) {
        throw new NotFoundException();
      }
      return {
        message: 'success',
        data: order,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    try {
      const result = await this.reviewRepository.update(id, updateReviewDto);
      if (!result) {
        throw new NotFoundException();
      }
      const updatedCatalog = await this.reviewRepository.findOne({ where : {id}});
      return {
        message: 'success',
        data: updatedCatalog,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async remove(id: string) {
    try {
      const result = await this.reviewRepository.delete(id);
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

  async findAllByProductId({
                                   productId,
                                   page = 1,
                                   limit = 10,
                                 }: {
    productId: string;
    page?: number;
    limit?: number;
  }) {
    console.log("log from service");
    try {
      const [data, total] = await this.reviewRepository.findAndCount({
        where: { productId },
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      return {
        message: 'Reviews retrieved successfully for product',
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


  async findAllByUserId({
                          userId,
                          page = 1,
                          limit = 10,
                        }: {
    userId: string;
    page?: number;
    limit?: number;
  }) {
    console.log("log from service");
    try {
      const [data, total] = await this.reviewRepository.findAndCount({
        where: { userId },
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      return {
        message: 'Reviews retrieved successfully for user',
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



}
