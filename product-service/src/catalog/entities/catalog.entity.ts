import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum Category{
    MOBILE = "MOBILE",
    LAPTOP = "LAPTOP",
}

@Entity()
export class Catalog {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    name: string;

    @Column({
        type: 'enum',
        enum: Category,
    })
    category: Category;

    @Column({ type: 'float' })
    price: number;

    @Column({default: true})
    isExist: boolean;

    @Column({
        default: 0,
        type: 'float',
    })
    score: number;

    @Column()
    createdAt: Date;

}


