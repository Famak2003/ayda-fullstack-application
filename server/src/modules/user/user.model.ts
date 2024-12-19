import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({tableName: 'user',
    createdAt: "created_at", // Map to DB column
    updatedAt: "updated_at",
    deletedAt: "deleted_at"
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull:false,
    validate: {
        isEmail:true
    }
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: boolean;

}
