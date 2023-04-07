<template>
  <div class="h-full">
    <!-- <NuxtWelcome /> -->
    <!-- по хорошему нужно header/footer рендерить только в нужных routes -->
    <Header />
    <main class="min-h-screen">
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <NuxtPage />
      </div>
    </main>
    <Footer />
  </div>
</template>


<script setup lang="ts">
// import { onMounted } from 'vue';
// import { useStore } from '~/store/';

// const route = useRoute();
// const store = useStore();

// onMounted(async () => {
//   store.fetchProductList();
// })
</script>
