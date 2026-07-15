// Central GROQ queries so they're reusable and easy to eyeball/test.
import { groq } from '#imports'

const navLinkProjection = `
  label,
  linkType,
  internalPath,
  externalUrl
`

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteTitle,
  metaDescription,
  ogImage,
  address,
  mainNavPrimaryLinks[]{${navLinkProjection}},
  footerPrimaryLinks[]{${navLinkProjection}},
  footerSecondaryLinks[]{${navLinkProjection}}
}`
