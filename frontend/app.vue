<template>
  <div class="h-full">
    <!-- <NuxtWelcome /> -->
    <!-- по хорошему нужно header/footer рендерить только в нужных routes -->
    <Header />
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <NuxtPage />
      </div>
    </main>
    <Footer />
  </div>
</template>


<script setup lang="ts">
const route = useRoute()
</script>
