import { RefundService } from './refund.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { UpdateRefundDto } from './dto/update-refund.dto';
export declare class RefundController {
    private readonly refundService;
    constructor(refundService: RefundService);
    create(createRefundDto: CreateRefundDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateRefundDto: UpdateRefundDto): string;
    remove(id: number): string;
}
