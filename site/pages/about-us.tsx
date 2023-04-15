import type { GetStaticPropsContext } from 'next'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import Image from 'next/image'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise

  return {
    props: { pages, categories },
  }
}

export default function Faq() {
  return (
    <Container className="pt-4">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">
                        Hi! Paint Polish is the first artisan indie nail polish brand here in the Philippines.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">
                        I am a one-woman team with a full-time job who can 
                        only allot once a week (usually on a Saturday) for this passion project turned small business.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">
                        I personally handcraft everything (mixing, pouring, labelling, packaging, shipping, marketing, etc). 
                        Hence, I can only do pre-orders for now as everything is made in small batches. Thank you for your
                        patience. 😊
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">
                        In an effort to reduce waste footprint, these will be wrapped in carefully curated and
                        cleaned recycled bubblewraps and packaging materials (boxes/ribbons/wrappers) 😊
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">
                        Thank you so much for visiting our website! Hope you will enjoy these colors as much as I
                        enjoyed creating them! Happy painting!
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">
                        Sincerely,<br />
                        Jerrica
                    </p>
                </div>
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <Image
                            alt="Paint Polish anatomy"
                            src={'/hero.jpg'}
                            height={720}
                            width={720}
                            quality="85"
                            />
                        </h3>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </Container>
  )
}

Faq.Layout = Layout
