import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/products/most-visited', 'ProductsController.mostVisited')
Route.resource('/products', 'ProductsController').apiOnly()
