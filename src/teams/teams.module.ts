import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TeamsEntity } from './teams.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TeamsEntity])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
