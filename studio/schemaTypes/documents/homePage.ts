import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons/Home'

export default defineType({
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Home',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Home Page'}),
  },
})
