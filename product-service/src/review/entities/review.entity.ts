import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    productId: string;

    @Column()
    content : string;

    @Column({type: 'float'})
    score : number;

    @Column()
    createdAt: Date;
}
