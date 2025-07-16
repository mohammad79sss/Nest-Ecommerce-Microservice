
export class CreateOrderDto {
    userId: string;
    productIds: string[];
    isPaid: boolean;
    refunded: boolean;
    createAt: Date;
}
