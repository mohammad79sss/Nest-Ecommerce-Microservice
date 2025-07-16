import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum Role{
    ADMIN = "ADMIN",
    USER = "USER",
}

@Entity()
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column(
        {
            type: 'enum',
            enum: Role,
        }
    )
    role: Role

}
