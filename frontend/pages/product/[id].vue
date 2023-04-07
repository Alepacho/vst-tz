<template>
    <div>
        product id: {{ $route.params.id }}
        <div v-if="product != null">
            <div> Название: {{ product.name }} </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { IProduct } from '~/types';
import { useStore } from '~/store';

let product: IProduct | null = null;
const store = useStore();
const route = useRoute();

onMounted(async () => {
    const index = Number(route.params.id)
    const result: any = await store.getProductByID(index)
    if (result != null) {
        product = result
    } else {
        console.warn("result is null!")
    }
})

</script>