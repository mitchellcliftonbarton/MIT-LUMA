import {defineType, defineField} from 'sanity'
import {ProjectsIcon} from '@sanity/icons/Projects'

export default defineType({
  name: 'projectsLanding',
  type: 'document',
  title: 'Projects Landing',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Projects',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Projects Landing'}),
  },
})
