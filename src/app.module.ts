import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
