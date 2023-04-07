<template>
    <div class="flex justify-between bg-white rounded p-3 mb-3">
        <Button :on-click="handleClickBack"> Назад </Button>
        <Button :on-click="() => {}" 
            class="bg-rose-500 disabled:bg-rose-300 hover:bg-rose-600 focus:ring-4 focus:ring-rose-300"
        > <HeartIcon class="h-5 w-5 flex-none" aria-hidden="true" /> </Button>
    </div>
    <div class="bg-white rounded p-3">
        <!-- product id: {{ $route.params.id }} -->
        <div v-if="product != null" class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-1 md:row-span-3">
                <img class="rounded h-96 w-full object-cover object-center" :src="product.image" draggable="false"/> 
                <div class="my-3 font-bold text-xl"> Цена: <span class="font-bold text-2xl"> {{ product.price }} ₽ </span> </div>
                <Button :on-click="handleBuyProduct" 
                    class="w-full text-xl bg-rose-500 disabled:bg-rose-300 hover:bg-rose-600 focus:ring-4 focus:ring-rose-300"
                > Приобрести </Button>
            </div>
            <!-- <div class="col-span-1"> <h1 class="text-xl font-bold tracking-tight text-gray-900"> {{ product.name }} </h1> </div> -->
            <div class="row-span-1 col-span-1 md:col-span-6">
                <div>
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900"> {{ product.name }} </h1>
                </div>
                <hr class="my-3">
                <!-- min-h-full h-10 md:h-20 -->
                <div class="mb-4 text-md"> <span class="font-bold"> Описание: </span> {{ product.description }} </div>
                <div class="font-bold mb-3"> Характеристики: </div>
                <!-- {{ product.details }} -->
                <div v-for="(detail, index) in product.details" :key="index" class="flex">
                    <!-- KEY -->
                    <div
                        class="w-1/3 inline-flex items-center px-3 text-sm text-gray-900"
                        :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'"
                    >
                    {{ detail.title }}
                </div>
                    <!-- VALUE -->
                    <div
                        class="w-1/2 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                        :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'"
                    >
                        {{ detail.description }}
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            Загрузка...
        </div>
    </div>
</template>

<script setup lang="ts">
import {
  HeartIcon
} from '@heroicons/vue/24/outline'
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
                if (typeof r.details === 'string')
                    r.details = JSON.parse(r.details)
                product.value = r 
                console.log("value", product.value)
            }
        }
    }, 2000)
})

onUnmounted(() => clearInterval(interval))

const handleClickBack = () => {
    const router = useRouter();
    router.push('/')
}

const handleBuyProduct = () => {
    alert("А никак не купить!!!");
}
</script>