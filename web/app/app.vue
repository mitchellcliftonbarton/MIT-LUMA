<script setup lang="ts">
// Demo of the Sanity → Nuxt connection. Renders once a Site Settings document
// has been created and published in the studio; until then `data` is null.
const { data: settings } = await useSiteSettings()
</script>

<template>
  <div class="min-h-screen bg-white p-8 font-sans text-black">
    <NuxtRouteAnnouncer />

    <h1 class="text-2xl font-bold">
      {{ settings?.siteTitle || 'Set a Site Title in Sanity Studio' }}
    </h1>
    <p v-if="settings?.metaDescription" class="mt-2 text-gray-600">
      {{ settings.metaDescription }}
    </p>
  </div>
</template>
