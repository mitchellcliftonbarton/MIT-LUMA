import {defineType, defineField} from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons/InfoOutline'

export default defineType({
  name: 'aboutPage',
  type: 'document',
  title: 'About Page',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'About',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'About Page'}),
  },
})
