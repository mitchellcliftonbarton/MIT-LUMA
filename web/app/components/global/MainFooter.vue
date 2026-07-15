<template>
  <footer
    id="main-footer"
    class="p-base grid grid-cols-12 gap-base"
  >
    <div class="col-span-2 space-y-2">
      <IconsMitLogoFull />

      <div
        v-if="address"
        class="text-3xs font-tertiary"
      >
        <SanityContent :value="address" />
      </div>
    </div>

    <div class="col-span-9"></div>

    <div class="col-span-1 text-right leading-none">MIT SA + P<br />LUMA ARLES</div>
  </footer>
</template>

<script setup lang="ts">
const { data: settings } = await useSiteSettings()

const address = computed(() => settings.value?.address ?? null)
</script>

<style scoped>
#main-footer {
  :deep(.icon-mit-logo-full) {
    width: 108px;
  }
}
</style>
