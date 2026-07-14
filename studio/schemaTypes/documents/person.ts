import {defineType, defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons/Users'

export default defineType({
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      title: 'First Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc) => `${doc.firstName || ''} ${doc.lastName || ''}`.trim(),
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {firstName: 'firstName', lastName: 'lastName', subtitle: 'slug.current'},
    prepare: ({firstName, lastName, subtitle}) => ({
      title: [firstName, lastName].filter(Boolean).join(' '),
      subtitle,
    }),
  },
})
