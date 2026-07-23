<template>
  <a
    v-if="link.linkType === 'external'"
    :href="link.externalUrl"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot>{{ link.label }}</slot>
  </a>

  <NuxtLink
    v-else
    :to="link.internalPath"
  >
    <slot>{{ link.label }}</slot>
  </NuxtLink>
</template>

<script setup>
/**
 * Renders a Sanity `navLink`: an external URL opens in a new tab as an <a>,
 * otherwise an internal path renders as a <NuxtLink>.
 */
defineProps({
  link: { type: Object, required: true },
})
</script>
