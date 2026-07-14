import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure, singletonTypes} from './structure'

// Actions that don't make sense for singletons (one fixed document per type).
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'MIT LUMA',

  projectId: '988esrpr',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    // For singletons, strip create / delete / duplicate so editors can't make extras.
    actions: (input, context) =>
      singletonTypes.includes(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
    // Keep singletons out of the global "create new document" menu.
    newDocumentOptions: (prev) =>
      prev.filter((template) => !singletonTypes.includes(template.templateId)),
  },
})
