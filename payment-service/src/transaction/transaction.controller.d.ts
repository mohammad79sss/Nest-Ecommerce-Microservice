import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    create(createTransactionDto: CreateTransactionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateTransactionDto: UpdateTransactionDto): string;
    remove(id: number): string;
}
