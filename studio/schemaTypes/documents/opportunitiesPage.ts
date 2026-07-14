import {defineType, defineField} from 'sanity'
import {RocketIcon} from '@sanity/icons/Rocket'

export default defineType({
  name: 'opportunitiesPage',
  type: 'document',
  title: 'Opportunities Page',
  icon: RocketIcon,
  // The active/past opportunities list will be added here as an array of
  // inline objects in the content phase (no separate documents).
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Opportunities',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Opportunities Page'}),
  },
})
