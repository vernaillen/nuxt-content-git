<template>
  <NuxtExampleLayout example="documentDriven" repo="vernaillen/nuxt-content-git">
    <template #nav>
      <ContentNavigation v-slot="{ navigation }">
        <div class="mb-2">
          <span v-for="link of navigation" :key="link._path" class="mx-2">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </span>
        </div>
      </ContentNavigation>
    </template>
    <template #logo>
      <NuxtContentLogo class="h-10"/>
      <div class="text-2xl flex">
        + Git
      </div>
    </template>
    <template #default>
      <slot  class="text-left"/>
    </template>
  </NuxtExampleLayout>
</template>
