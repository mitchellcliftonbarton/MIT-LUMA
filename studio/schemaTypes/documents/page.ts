import {defineType, defineField} from 'sanity'
import {DocumentIcon} from '@sanity/icons/Document'

/**
 * Generic top-level page for miscellaneous content — Privacy Policy,
 * Accessibility Statement, etc. Routed at /[slug].
 */
export default defineType({
  name: 'page',
  type: 'document',
  title: 'Misc Page',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
  },
})
