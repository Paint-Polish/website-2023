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
                        I am a healthcare worker who was temporarily burnt out by the pandemic and subsequently infected by covid-19 (thrice, to date).
                        I turned to nail polish as a hobby especially during my own repeated two-week isolation periods during ECQ.
                        I became passionate about the international independent nail polish brands that presented better special effects than
                        the usual mainstream drugstore nail polishes. Because importing is extremely expensive and 
                        there was none available in our country, I was inspired to start the first local indie nail polish and create my own. 
                        This is also my very first business.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">
                        Being a full-time healthcare worker, I have zero background in anything business related. 
                        So in this aspect, I take it one step at a time and learn as I go, with a lot of bloopers along the way.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">
                        Fortunately, Grizelda, stepped in late 2022 to collaborate for PAINT's first ever public appearance (Soiree).
                        She became my business partner since then and handles mostly the business and marketing aspect of the brand.
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
