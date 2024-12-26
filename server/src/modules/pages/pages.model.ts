import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Sections } from '../sections/sections.model';

@Table({
  tableName: 'pages',
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Pages extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Sections) // establish relationship between tables
  sections: Sections[]; // type of sections is an array of sections
}
