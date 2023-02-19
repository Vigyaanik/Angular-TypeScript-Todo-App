import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany } from 'typeorm';

import { Translate } from './Translate';
@Entity('user')   
export class User  extends BaseEntity{

    @PrimaryColumn({
        unique: true
    })
    username: string;

    @Column()
    password: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        default: false
    })
    is_active: boolean;

    @OneToMany(
        () => Translate,
        translate => translate.user
    )
    translates: Translate[];
}