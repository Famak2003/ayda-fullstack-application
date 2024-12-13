import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Pages extends Model {
  @Column({
    type: DataType.STRING, // Specify the data type
    allowNull: false, // Optional: Define if this column can be null
  })
  name: string;

  @Column({
    type: DataType.STRING,
    field: 'display_name', // Map to the custom column name in the database
  })
  displayName: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'is_home'
  })
  isHome: boolean;
}
