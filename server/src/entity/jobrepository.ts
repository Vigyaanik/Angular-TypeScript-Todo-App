import { EntityManager, Repository } from 'typeorm';
import { Job } from './jobs';

export class JobRepository {
  private entityManager: EntityManager;
  private repository: Repository<Job>;

  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
    this.repository = this.entityManager.getRepository(Job);
  }

  async create(job: Job): Promise<void> {
    await this.repository.save(job);
  }

  async findOne(id: number): Promise<Job | null | undefined> {
    return await this.repository.findOne({ where: { id } });
  }

  async findAll(): Promise<Job[]> {
    return await this.repository.find();
  }

  async update(id: number, job: Job): Promise<void> {
    await this.repository.update(id, job);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
