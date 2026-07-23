<template>
  <img
    v-if="src"
    :src="src"
    :alt="altText"
    :width="dimensions?.width"
    :height="dimensions?.height"
    :style="dimensions?.aspectRatio ? `aspect-ratio: ${dimensions.aspectRatio}` : undefined"
    :loading="loading"
    :class="{ loaded }"
    @load="loaded = true"
    @error="loaded = true"
  />
</template>

<script setup>
/**
 * Renders a Sanity image with a CDN-resized src and a fade-in on load. The
 * fade comes from the global `img[loading='lazy']` → `.loaded` rule in
 * global.css: the image starts transparent and this component adds `loaded`
 * once the browser reports the image ready (or errored, so failures don't
 * leave a permanent blank).
 *
 * Expand the asset in your GROQ query (`asset->{ _ref, metadata { dimensions } }`)
 * so intrinsic width/height are set and the layout doesn't shift while loading.
 *
 * Any `class` you pass falls through onto the <img> (e.g. `class="media-cover"`).
 *
 * Usage:
 *   <SanityImage :image="person.portrait" :width="1200" class="media-cover" />
 */
const props = defineProps({
  image: { type: Object, default: null },
  // CDN fetch width in px.
  width: { type: Number, default: 1800 },
  // Overrides the image's own `alt`/`caption`.
  alt: { type: String, default: undefined },
  loading: { type: String, default: 'lazy' },
})

const urlFor = useSanityImage()

const src = computed(() => urlFor(props.image, { w: props.width }))
const dimensions = computed(() => props.image?.asset?.metadata?.dimensions)
const altText = computed(() => props.alt ?? props.image?.alt ?? props.image?.caption ?? '')

const loaded = ref(false)
</script>
