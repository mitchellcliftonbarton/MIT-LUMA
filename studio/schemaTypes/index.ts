import navLink from './objects/navLink'

import siteSettings from './documents/siteSettings'

// Singleton pages
import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import projectsLanding from './documents/projectsLanding'
import eventsLanding from './documents/eventsLanding'
import peopleLanding from './documents/peopleLanding'
import opportunitiesPage from './documents/opportunitiesPage'
import contactPage from './documents/contactPage'

// Collections
import project from './documents/project'
import event from './documents/event'
import person from './documents/person'
import page from './documents/page'

export const schemaTypes = [
  // Objects
  navLink,
  // Singleton pages
  homePage,
  aboutPage,
  projectsLanding,
  eventsLanding,
  peopleLanding,
  opportunitiesPage,
  contactPage,
  // Collections
  project,
  event,
  person,
  page,
  // Settings
  siteSettings,
]
