import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jobs')
export class Job extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  customerName: string;

  @Column()
  jobDescription: string;

  @Column({
    nullable: true
  })
  dueDate: Date;

  @Column()
  recurring: boolean;

  @Column({
    nullable: true
  })
  recurWeeks: number;

  @Column({
    nullable: true
  })
  comments: string;

  @Column({
    default: false
  })
  paymentReceived: boolean;

  @Column({
    default: false
  })
  jobComplete: boolean;
}
