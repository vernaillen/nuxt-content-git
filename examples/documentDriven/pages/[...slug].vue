<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <main>
    <NuxtLayout class="text-start">
      meta:<br>
      created: {{ page.createdDate }}<br>
      updated: {{ page.updatedDate }}<br>
      <hr>
      page content:<br>
      <ContentDoc />
    </NuxtLayout>
  </main>
</template>
