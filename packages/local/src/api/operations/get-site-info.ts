import { OperationContext } from '@vercel/commerce/api/operations'
import { Category, GetSiteInfoOperation } from '@vercel/commerce/types/site'
import { LocalConfig } from '../index'

export type GetSiteInfoResult<
  T extends { categories: any[]; brands: any[] } = {
    categories: Category[]
    brands: any[]
  }
> = T

export default function getSiteInfoOperation({}: OperationContext<any>) {
  function getSiteInfo({
    query,
    variables,
    config: cfg,
  }: {
    query?: string
    variables?: any
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<GetSiteInfoResult> {
    return Promise.resolve({
      categories: [
        {
          id: 'new-arrivals',
          name: 'New Arrivals',
          slug: 'new-arrivals',
          path: '/new-arrivals',
        },
        {
          id: 'featured',
          name: 'Featured',
          slug: 'featured',
          path: '/featured',
        },
        {
          id: 'nail-polish',
          name: 'Nail Polish',
          slug: 'nail-polish',
          path: '/nail-polish',
        },
        {
          id: 'nail-care',
          name: 'Nail Care',
          slug: 'nail-care',
          path: '/nail-care',
        },
        {
          id: 'nail-art',
          name: 'Nail Art',
          slug: 'nail-art',
          path: '/nail-art',
        },
        {
          id: 'miscellaneous',
          name: 'Miscellaneous',
          slug: 'miscellaneous',
          path: '/miscellaneous',
        },
      ],
      brands: [
        {
          id: 'army',
          name: 'Army',
          slug: 'army',
          path: '/army',
        },
        {
          id: 'campus',
          name: 'Campus',
          slug: 'campus',
          path: '/campus',
        },
        {
          id: 'cocktail',
          name: 'Cocktail',
          slug: 'cocktail',
          path: '/cocktail',
        },
        {
          id: 'coffee',
          name: 'Coffee',
          slug: 'coffee',
          path: '/coffee',
        },
        {
          id: 'coleccion-de-jardin',
          name: 'Colección De Jardin',
          slug: 'coleccion-de-jardin',
          path: '/coleccion-de-jardin',
        },
        {
          id: 'the-essentials',
          name: 'The Essentials',
          slug: 'the-essentials',
          path: '/the-essentials',
        },
        {
          id: 'ethereal',
          name: 'Ethereal',
          slug: 'ethereal',
          path: '/ethereal',
        },
        {
          id: 'ever-after',
          name: 'Ever After',
          slug: 'ever-after',
          path: '/ever-after',
        },
        {
          id: 'goddess',
          name: 'Goddess',
          slug: 'goddess',
          path: '/goddess',
        },
        {
          id: 'holoday',
          name: 'Holoday',
          slug: 'holoday',
          path: '/holoday',
        },
        {
          id: 'love-verse',
          name: 'Love Verse',
          slug: 'love-verse',
          path: '/love-verse',
        },
        {
          id: 'milktea',
          name: 'Milktea',
          slug: 'milktea',
          path: '/milktea',
        },
        {
          id: 'new-year-duo',
          name: 'New Year Duo',
          slug: 'new-year-duo',
          path: '/new-year-duo',
        },
        {
          id: 'seasons',
          name: 'Seasons',
          slug: 'seasons',
          path: '/seasons',
        },
        {
          id: 'soiree',
          name: 'Soiree',
          slug: 'soiree',
          path: '/soiree',
        },
        {
          id: 'spells',
          name: 'Spells',
          slug: 'spells',
          path: '/spells',
        },
        {
          id: 'time',
          name: 'Time',
          slug: 'time',
          path: '/time',
        },
        {
          id: 'wizarding-world',
          name: 'Wizarding World',
          slug: 'wizarding-world',
          path: '/wizarding-world',
        },
        {
          id: 'zodiac',
          name: 'Zodiac',
          slug: 'zodiac',
          path: '/zodiac',
        },
      ],
    })
  }

  return getSiteInfo
}
