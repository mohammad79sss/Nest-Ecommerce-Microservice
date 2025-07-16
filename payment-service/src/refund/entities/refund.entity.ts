import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Refund {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    transactionId: string;

    @Column()
    createdAt: Date;

}
