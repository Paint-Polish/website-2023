import data from '../data.json'
import { SWRHook } from '@vercel/commerce/utils/types'
import useSearch, { UseSearch } from '@vercel/commerce/product/use-search'
export default useSearch as UseSearch<typeof handler>

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input, options, fetch }) {},
  useHook:
    () =>
    ({ search, sort, brandId, categoryId, ...otherProps }) => {
      // brandId
      // --
      // categoryId
      // -- new-arrivals
      // -- featured
      // -- collections
      // locale

      // console.log('Hello World')
      // console.log(otherProps)

      const sortProps = sort.split('-')
      const sortCol = sortProps[0] || undefined
      const sortOrder = sortProps[1] || 'asc'

      const filteredProducts = data.products
        .filter((product) =>
          !categoryId ? true : product.categories.includes(categoryId)
        )
        .filter((product) => (!brandId ? true : product.collection === brandId))
        .filter(
          (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())
        )

      const sortedProducts = !sortCol
        ? filteredProducts
        : filteredProducts.sort((itemOne, itemTwo) => {
            switch (sortCol) {
              case 'price':
                if (sortOrder === 'asc') {
                  return itemOne.price.value - itemTwo.price.value
                }
                return itemTwo.price.value - itemOne.price.value
              case 'trending':
              case 'latest':
              default:
                return itemOne.name.localeCompare(itemTwo.name)
            }
          })

      return {
        data: {
          products: filteredProducts,
          found: filteredProducts.length > 0,
        },
      }
    },
}
