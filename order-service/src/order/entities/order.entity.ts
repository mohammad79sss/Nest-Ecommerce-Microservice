import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column("uuid", { array: true }) // UUID array for product IDs
    productIds: string[];

    @Column({ default: false })
    isPaid: boolean;

    @Column({ default: false })
    refunded: boolean;

    @Column()
    createAt: Date;
}
