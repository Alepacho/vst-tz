<template>
    <div class="bg-white rounded">
        <!-- product id: {{ $route.params.id }} -->
        <div v-if="product != null">
            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3"> <img class="h-full w-full object-cover object-center" :src="product.image" draggable="false"/> </div>
                <div class="col-span-1"> <h1 class="text-xl font-bold tracking-tight text-gray-900"> {{ product.name }} </h1> </div>
                <div class="row-span-2 col-span-2">
                    <div> Цена: <span class="font-bold"> {{ product.price }} </span> </div>
                    <div> <span class="font-bold"> Описание: </span> {{ product.description }} </div>
                    <div> Характеристики: {{ product.details }} </div>
                </div>
            </div>
        </div>
        <div v-else>
            Загрузка...
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { IProduct } from '~/types';
import { useStore } from '~/store';

let product = ref<IProduct | null>(null);
const store = useStore();
const route = useRoute();
let interval: any;
onMounted(async () => {
    const index = Number(route.params.id)
    
    let loaded = false;
    interval = setInterval(async () => {
        console.log({product})
        if (product.value !== null) {
            console.log("result", product)
            loaded = true;
        }

        if (loaded == true) {
            clearInterval(interval)
        } else {
            console.log("fetching product id:", index)
            const result: any = await store.getProductByID(index)
            if (result !== null) {
                let r = { ...result }
                if (r.details instanceof String)
                    r.details = JSON.parse(r.details)
                product.value = r 
            }
        }
    }, 2000)
})

onUnmounted(() => clearInterval(interval))
</script>