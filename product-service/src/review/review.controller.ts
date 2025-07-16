import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller()
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @MessagePattern('createReview')
  create(@Payload() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @MessagePattern('findAllReview')
  findAll(@Payload() payload: { page?: number; limit?: number }) {
    return this.reviewService.findAll(payload);
  }

  @MessagePattern('findOneReview')
  findOne(@Payload() id: string) {
    return this.reviewService.findOne(id);
  }

  @MessagePattern('updateReview')
  update(@Payload() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(updateReviewDto.id, updateReviewDto);
  }

  @MessagePattern('removeReview')
  remove(@Payload() id: string) {
    return this.reviewService.remove(id);
  }

  @MessagePattern('findAllReviewByProductId')
  findAllByProductId(
      @Payload() payload: { productId: string; page?: number; limit?: number }
  ) {
    return this.reviewService.findAllByProductId(payload);
  }

  @MessagePattern('findAllReviewByUserId')
  findAllByUserId(
      @Payload() payload: { userId: string; page?: number; limit?: number }
  ) {
    return this.reviewService.findAllByUserId(payload);
  }

}
