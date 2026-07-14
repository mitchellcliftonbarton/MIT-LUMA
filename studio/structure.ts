import type {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons'

// Singleton document types: edited as a single fixed document, not a list.
export const singletonTypes = ['siteSettings']

// Helper to build a singleton list item with a fixed document id (== the type
// name), so the studio always opens the one canonical document.
const singleton = (S: any, schemaType: string, title: string, icon: any) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(schemaType).documentId(schemaType))

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([singleton(S, 'siteSettings', 'Site Settings', CogIcon)])
