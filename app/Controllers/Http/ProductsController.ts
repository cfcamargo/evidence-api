import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = 20

    const products = await Product.query().paginate(page, perPage)

    return products
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only([
      'title',
      'description',
      'brand',
      'category',
      'cover',
      'systemId',
      'quantity',
    ])

    data.category === '' ? (data.category = 'generic') : ''

    const product = await Product.create(data)

    return product
  }

  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    return product
  }

  public async update({ request, params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    const data = request.only(['title', 'description', 'cover', 'quantity'])

    product.merge(data)

    product.save()
  }

  public async destroy({ params, response }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    await product.delete()

    return response.status(201).send({ message: 'Deleted successfully' })
  }
}
