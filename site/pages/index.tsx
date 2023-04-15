import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero
        headline="Paint Polish"
        description="Paint Polish - First Philippine Artisan 5-Free and Cruelty-Free Nail Polish Est. 2021"
      />

      <div className="pt-10 pb-6 flex flex-col items-center mb-5">
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">
          Find the perfect nail polish or nail care.
        </p>
      </div>

      <Grid layout="normal" variant="default">
        {products
          .filter((product: any) => (product.categories.includes("featured")))
          .slice(0, 6)
          .map((product: any, i: number) => (
            <ProductCard
              key={product.id}
              product={product}
              imgProps={{
                alt: product.name,
                width: i === 1 ? 1080 : 540,
                height: i === 1 ? 1080 : 540,
              }}
            />
          ))
        }
      </Grid>

      <div className="pt-10 pb-6 flex flex-col items-center mb-5">
        <h2 className="text-4xl mb-3">Looking for something?</h2>
        <p className="text-gray-600 text-sm"></p>
      </div>

      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
