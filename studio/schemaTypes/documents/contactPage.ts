import {defineType, defineField} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons/Envelope'

export default defineType({
  name: 'contactPage',
  type: 'document',
  title: 'Contact Page',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Contact',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Contact Page'}),
  },
})
