/* eslint-disable import/no-cycle */
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import BaseEntity from 'db/baseEntity';
import Game from 'modules/game/entity/gameEntity';
import Address from 'modules/address/entity/addressEntity';

@ObjectType()
@Entity()
export default class Publisher extends BaseEntity {
  @Field()
  @Column({ length: 50, nullable: false, type: 'varchar' })
  name!: string;

  @Field(() => Game)
  @OneToMany(() => Game, game => game.publisher)
  @JoinTable()
  games!: Game[];

  @Field(() => Address)
  @OneToOne(() => Address, address => address.plays)
  @JoinColumn()
  address!: Address;

  @Field({ nullable: true })
  @Column({ length: 256, nullable: true, type: 'varchar' })
  logo!: string;
}
