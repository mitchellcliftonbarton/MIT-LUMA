import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons/Users'

export default defineType({
  name: 'peopleLanding',
  type: 'document',
  title: 'People Landing',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'People',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'People Landing'}),
  },
})
