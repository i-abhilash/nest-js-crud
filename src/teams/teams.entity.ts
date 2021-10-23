import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teams')
export class TeamsEntity {
  @PrimaryGeneratedColumn('increment')
  team_id: number;

  @Column('varchar')
  name: string;

  @Column({ type: 'timestamptz' })
  updated_at: Date;

  @Column('numeric')
  updated_by: number;

  @Column({ type: 'varchar', nullable: true })
  status: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  image_url: string;

  @Column({ type: 'varchar', nullable: true })
  slack_hook: string;

  @Column({ type: 'varchar', nullable: true })
  channel_name: string;
}
