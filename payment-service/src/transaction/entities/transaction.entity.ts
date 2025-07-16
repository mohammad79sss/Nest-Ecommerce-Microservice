import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Method {
    ONLINE = 'ONLINE',
    IN_DOOR = 'IN_DOOR',
}

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    orderId: string;

    @Column({
        type: 'enum',
        enum: Method,
    })
    method: Method;

    @Column()
    createdAt: Date;
}
