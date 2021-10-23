import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TeamsEntity } from './teams.entity';

@Injectable()
export class TeamsService extends TypeOrmCrudService<TeamsEntity> {
  constructor(@InjectRepository(TeamsEntity) repo) {
    super(repo);
  }
}
