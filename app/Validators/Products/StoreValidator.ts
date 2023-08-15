import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.required(), rules.minLength(3)]),
    description: schema.string({ trim: true }, [rules.required(), rules.minLength(3)]),
    brand: schema.string({ trim: true }, [rules.required()]),
    category: schema.string({ trim: true }, [rules.required()]),
    cover: schema.string({ trim: true }),
    systemId: schema.number([rules.required()]),
    quantity: schema.number([rules.required()]),
    price: schema.number([rules.required()]),
  })

  public messages: CustomMessages = {}
}
