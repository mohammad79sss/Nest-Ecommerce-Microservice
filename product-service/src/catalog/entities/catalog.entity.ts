import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum Category{
    MOBILE = "MOBILE",
    LAPTOP = "LAPTOP",
}

@Entity()
export class Catalog {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: Category,
    })
    category: Category;

    @Column()
    price: number;

    @Column({default: true})
    isExist: boolean;

    @Column()
    score: number;

    @Column()
    createdAt: Date;

}


