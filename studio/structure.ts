import type {StructureResolver} from 'sanity/structure'
import {HomeIcon} from '@sanity/icons/Home'
import {InfoOutlineIcon} from '@sanity/icons/InfoOutline'
import {ProjectsIcon} from '@sanity/icons/Projects'
import {CalendarIcon} from '@sanity/icons/Calendar'
import {UsersIcon} from '@sanity/icons/Users'
import {RocketIcon} from '@sanity/icons/Rocket'
import {EnvelopeIcon} from '@sanity/icons/Envelope'
import {DocumentIcon} from '@sanity/icons/Document'
import {DocumentsIcon} from '@sanity/icons/Documents'
import {CogIcon} from '@sanity/icons/Cog'

// Singleton document types: edited as a single fixed document, not a list.
export const singletonTypes = [
  'siteSettings',
  'homePage',
  'aboutPage',
  'projectsLanding',
  'eventsLanding',
  'peopleLanding',
  'opportunitiesPage',
  'contactPage',
]

// Helper to build a singleton list item with a fixed document id (== the type
// name), so the studio always opens the one canonical document.
const singleton = (S: any, schemaType: string, title: string, icon: any) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(schemaType).documentId(schemaType))

// A section that groups a landing singleton with its collection list.
const section = (
  S: any,
  title: string,
  icon: any,
  landingType: string,
  landingTitle: string,
  collectionType: string,
  collectionTitle: string,
) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.list()
        .title(title)
        .items([
          singleton(S, landingType, landingTitle, icon),
          S.documentTypeListItem(collectionType).title(collectionTitle),
        ]),
    )

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              singleton(S, 'homePage', 'Home', HomeIcon),
              singleton(S, 'aboutPage', 'About', InfoOutlineIcon),
              singleton(S, 'opportunitiesPage', 'Opportunities', RocketIcon),
              singleton(S, 'contactPage', 'Contact', EnvelopeIcon),
              S.divider(),
              S.documentTypeListItem('page').title('Misc Pages').icon(DocumentIcon),
            ]),
        ),
      section(S, 'Projects', ProjectsIcon, 'projectsLanding', 'Projects Landing', 'project', 'All Projects'),
      section(S, 'Events', CalendarIcon, 'eventsLanding', 'Events Landing', 'event', 'All Events'),
      section(S, 'People', UsersIcon, 'peopleLanding', 'People Landing', 'person', 'All People'),
      S.divider(),
      singleton(S, 'siteSettings', 'Site Settings', CogIcon),
    ])
