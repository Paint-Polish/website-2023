import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6">
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/" className={s.logo} aria-label="Logo">
            <Logo />
          </Link>
          <nav className={s.navMenu}>
            <Link href="/" className={s.link}>
              Home
            </Link>
            <Link href="/search/nail-polish" className={s.link}>
              Nail Polish
            </Link>
            <Link href="/search/nail-care" className={s.link}>
              Nail Care
            </Link>
            <Link href="/search/nail-art" className={s.link}>
              Nail Art
            </Link>
            {/* {links?.map((l) => (
              <Link href={l.href} key={l.href} className={s.link}>
                {l.label}
              </Link>
            ))}
            <Link href="/faqs" className={s.link}>
              FAQs
            </Link> */}
          </nav>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
        )}
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      )}
    </Container>
  </NavbarRoot>
)

export default Navbar
