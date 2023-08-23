import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.required(), rules.minLength(2)]),
    description: schema.string.optional({ trim: true }),
    brand: schema.string.optional({ trim: true }),
    category: schema.string.optional({ trim: true }),
    cover: schema.string.optional({ trim: true }),
    systemId: schema.number([rules.required()]),
    quantity: schema.number([rules.required()]),
    price: schema.number([rules.required()]),
    inactive: schema.boolean.optional(),
  })

  public messages: CustomMessages = {}
}
