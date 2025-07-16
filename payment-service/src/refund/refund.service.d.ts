import { CreateRefundDto } from './dto/create-refund.dto';
import { UpdateRefundDto } from './dto/update-refund.dto';
export declare class RefundService {
    create(createRefundDto: CreateRefundDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRefundDto: UpdateRefundDto): string;
    remove(id: number): string;
}
