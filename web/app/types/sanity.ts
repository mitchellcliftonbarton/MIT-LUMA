import type { PortableTextBlock } from '@portabletext/types'

/** A reusable nav link — mirrors the `navLink` object in the studio schema. */
export interface NavLink {
  label?: string
  linkType?: 'internal' | 'external'
  internalPath?: string
  externalUrl?: string
}

/** Shape returned by siteSettingsQuery in utils/queries.ts. */
export interface SiteSettings {
  siteTitle?: string
  metaDescription?: string
  ogImage?: unknown
  address?: PortableTextBlock[]
  mainNavPrimaryLinks?: NavLink[]
  footerPrimaryLinks?: NavLink[]
  footerSecondaryLinks?: NavLink[]
}
