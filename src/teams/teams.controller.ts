import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { TeamsService } from './teams.service';
import { TeamsEntity } from './teams.entity';
@Crud({
  model: {
    type: TeamsEntity,
  },
  params: {
    team_id: {
      field: 'team_id',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('teams')
export class TeamsController {
  constructor(public service: TeamsService) {}
}
