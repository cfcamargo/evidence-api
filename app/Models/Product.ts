import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public brand: string

  @column()
  public category: string

  @column()
  public cover: string

  @column()
  public systemId: number

  @column()
  public quantity: number

  @column()
  public price: number

  @column()
  public clicks: number

  @column()
  public inactive: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
