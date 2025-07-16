import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(createReviewDto: CreateReviewDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateReviewDto: UpdateReviewDto): string;
    remove(id: number): string;
}
