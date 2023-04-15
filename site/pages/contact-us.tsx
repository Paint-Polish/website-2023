import type { GetStaticPropsContext } from 'next'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import Link from 'next/link'

export default function Faq() {
  return (
    <Container className="pt-4">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            Email Address
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            <Link href="mailto:paintpolish.official@gmail.com">
                                paintpolish.official@gmail.com
                            </Link>
                        </p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            Facebook
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            <Link href="https://www.facebook.com/paintpolish.official/">
                                https://www.facebook.com/paintpolish.official/
                            </Link>
                        </p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            Instagram
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            <Link href="https://www.instagram.com/paintpolish.official">
                                https://www.instagram.com/paintpolish.official
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </Container>
  )
}

Faq.Layout = Layout
