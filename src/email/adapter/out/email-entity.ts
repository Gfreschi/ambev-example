import { IsNotEmpty } from 'class-validator';
import { Column, DataType, Model, Table, Default } from 'sequelize-typescript';
import { randomUUID } from 'node:crypto';

@Table({
  tableName: 'emails',
  timestamps: true,
})
export class EmailEntity extends Model<EmailEntity> {
  @Column({
    type: DataType.UUID,
    defaultValue: () => randomUUID(),
    primaryKey: true,
  })
  id: string;

  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  recipient_email: string;

  @IsNotEmpty()
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  body: string;

  @Default(null)
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  sentAt: Date;
}
