import { type SchemaTypeDefinition } from 'sanity'
import products from './schemas/products'
import featuredProducts from './schemas/featuredProducts'
import LatestProducts from './schemas/LatestProducts'
import discountedItem from './schemas/discountedItem'
import discountsArea from './schemas/discountsArea'
import marketingPanel from './schemas/marketingPanel'
import uniqueFeatures from './schemas/uniqueFeatures'
import trendingProducts from './schemas/trendingProducts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, featuredProducts, LatestProducts, discountedItem, discountsArea, marketingPanel, uniqueFeatures, trendingProducts],
}
