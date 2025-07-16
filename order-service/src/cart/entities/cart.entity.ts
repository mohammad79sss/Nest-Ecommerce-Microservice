import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Cart {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    userId: number;

    @Column()
    cartNumber: number;

    @Column()
    expireDate: Date;

}
