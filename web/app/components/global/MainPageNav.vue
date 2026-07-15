<template>
  <nav class="h-nav-height flex justify-center items-center">
    <ul class="flex justify-center items-center gap-[4rem] text-md uppercase">
      <li
        v-for="(link, i) in links"
        :key="i"
      >
        <AppLink :link="link" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { data: settings } = await useSiteSettings()

const links = computed(() => settings.value?.mainNavPrimaryLinks ?? [])
</script>
