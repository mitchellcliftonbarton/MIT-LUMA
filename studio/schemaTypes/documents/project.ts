import {defineType, defineField} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: CaseIcon,
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
