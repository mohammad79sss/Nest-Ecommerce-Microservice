import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

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

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ unique: true })
    phone: string;

    @Column()
    address: string;

    @Column({
        type: 'enum',
        enum: Role,
    })
    role: Role;

    @CreateDateColumn()
    createdAt: Date;
}

