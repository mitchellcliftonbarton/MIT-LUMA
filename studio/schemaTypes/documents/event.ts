import {defineType, defineField} from 'sanity'
import {CalendarIcon} from '@sanity/icons/Calendar'

export default defineType({
  name: 'event',
  type: 'document',
  title: 'Event',
  icon: CalendarIcon,
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
