import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Pages } from '../pages/pages.model';

@Table
export class Sections extends Model{

    @ForeignKey(() => Pages) // Define ForeignKey
    @Column({
        type: DataType.NUMBER,
        field: 'page_id',
        allowNull: false
      })
    pageId: number;

    @BelongsTo(() => Pages) // Defines relationship
    page: Pages // Type is just a single page

    @Column({
        type: DataType.NUMBER,
        field: 'sort_id',
        allowNull: true
      })
    sortId: number

    @Column({type: DataType.JSON, allowNull: true})
    content: object

    @Column({
        type: DataType.STRING,
        unique: true, 
        allowNull: true
      })
    type: string
}