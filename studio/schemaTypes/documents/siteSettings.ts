import {defineType, defineField, defineArrayMember} from 'sanity'
import {CogIcon} from '@sanity/icons/Cog'

/**
 * Global site settings. Edited as a singleton (one fixed document) — see
 * ../structure.ts and the document.actions filter in sanity.config.ts.
 */
export default defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
      title: 'Site Title',
      description: 'The title of the site as it appears in the browser tab and search results.',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      rows: 3,
      description:
        'A fallback description for the site, used in search results. Can be overridden by per-page meta descriptions.',
    }),
    defineField({
      name: 'ogImage',
      type: 'image',
      title: 'OG Image',
      description: 'An image used for Open Graph metadata. Can be overridden by per-page images.',
    }),
    defineField({
      name: 'address',
      type: 'array',
      title: 'Address',
      description: 'The physical address of the MIT LUMA Lab',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [],
          },
        }),
      ],
    }),
    {
      name: 'mainNavPrimaryLinks',
      type: 'array',
      title: 'Main Navigation — Primary Links',
      description: 'The primary list of links shown in the main navigation.',
      of: [{type: 'navLink'}],
    },
    {
      name: 'footerPrimaryLinks',
      type: 'array',
      title: 'Footer — Primary Links',
      description: 'The primary list of links shown in the footer.',
      of: [{type: 'navLink'}],
    },
    {
      name: 'footerSecondaryLinks',
      type: 'array',
      title: 'Footer — Secondary Links',
      description: 'The secondary list of links shown in the footer.',
      of: [{type: 'navLink'}],
    },
  ],
  preview: {
    prepare: () => ({title: 'Site Settings'}),
  },
})
