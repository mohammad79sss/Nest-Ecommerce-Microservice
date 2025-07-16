import {Method} from "../entities/transaction.entity";

export class CreateTransactionDto {
    orderId: string;
    method: Method;
    createdAt: Date;
}
