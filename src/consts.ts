import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Toi La Kiet',
  description:
    'When life goes hard, i would go hehe',
  href: 'https://toilakiet.github.io',
  author: 'Vo Anh Kiet',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/ToiLaKiet',
    label: 'GitHub',
  },
  {
    href: 'mailto:toilakiet.dev@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
