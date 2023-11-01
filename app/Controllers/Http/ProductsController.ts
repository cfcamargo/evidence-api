import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import { StoreValidator } from 'App/Validators/Products'

export default class ProductsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)

    const products = await Product.query().paginate(page, perPage)

    return products
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const product = await Product.create(data)
    return product
  }

  public async show({ params }: HttpContextContract) {
    const product = await Product.findByOrFail('system_id', params.id)

    product.clicks += 1
    await product.save()

    return product
  }

  public async update({ request, params }: HttpContextContract) {
    const product = await Product.findByOrFail('system_id', params.id)

    const data = request.only([
      'title',
      'description',
      'cover',
      'quantity',
      'price',
      'clicks',
      'category',
      'inactive',
    ])

    product.merge(data)

    await product.save()
  }

  public async destroy({ params, response }: HttpContextContract) {
    const product = await Product.findByOrFail('system_id', params.id)

    await product.delete()

    return response.status(201).send({ message: 'Deleted successfully' })
  }
}
