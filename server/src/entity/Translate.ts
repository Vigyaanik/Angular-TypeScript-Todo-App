import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import { User } from './User';

export enum LanguageTypes {
    ENGLISH = 'ENGLISH',
    SPANISH = 'SPANISH'
}

@Entity('translate')   
export class Translate extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({
        type: 'enum',
        enum: LanguageTypes,
    })
    language: string;

    @ManyToOne(
        () => User,
        user => user.translates
    )
    @JoinColumn({ name: 'username' })
    user: User;
}