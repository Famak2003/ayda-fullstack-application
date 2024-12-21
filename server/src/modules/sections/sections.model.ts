import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';

@Table
export class Sections extends Model{
    @Column({
        type: DataType.NUMBER,
        field: 'page_id',
      })
    pageId: number;

    @Column({
        type: DataType.NUMBER,
        field: 'sort_id',
      })
    sortId: number

    @Column({type: DataType.JSON, allowNull: true})
    content: object

    @Column({
        type: DataType.STRING
      })
    type: string
}