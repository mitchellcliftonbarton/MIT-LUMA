<template>
  <header
    id="main-nav"
    class="fixed top-0 left-0 w-full h-nav-height px-lg flex items-center"
  >
    <nav class="flex-1">
      <ul class="flex justify-between items-center">
        <li>
          <NuxtLink to="/">
            <span class="sr-only">Home</span>
            <IconsLogo />
          </NuxtLink>
        </li>

        <li>
          <a
            href="https://www.mit.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">MIT</span>
            <IconsMitLogo />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
#main-nav {
  pointer-events: none;
  z-index: 2000;

  a {
    pointer-events: auto;
  }
}

:deep(.icon-logo) {
  width: 88px;
}

:deep(.icon-mit-logo) {
  width: 40px;
}
</style>
