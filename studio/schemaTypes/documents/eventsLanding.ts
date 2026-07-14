import {defineType, defineField} from 'sanity'
import {CalendarIcon} from '@sanity/icons/Calendar'

export default defineType({
  name: 'eventsLanding',
  type: 'document',
  title: 'Events Landing',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Events',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Events Landing'}),
  },
})
