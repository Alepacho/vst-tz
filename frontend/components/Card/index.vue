<template>
    <!-- BODY -->
    <div class="block m-auto border rounded-md p-2 max-w-sm">
        <!-- IMAGE -->
        <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none lg:h-80">
            <img v-if="item != undefined" :src="item.image" draggable="false" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            <div v-else class="animate-pulse h-full w-full bg-gray-200">
            </div>
        </div>
        <!-- INFO -->
        <!-- bg-gray-300 rounded-b-md -->
        <div class="w-full"> 
            <div class="p-3">
                <div v-if="item != undefined">
                    <h5 class="truncate md:text-clip font-bold tracking-tight text-gray-900"> {{ item.name }} </h5>
                </div>
                <div v-else class="animate-pulse h-6 w-full bg-gray-200">
                </div>

                <div v-if="item != undefined">
                    <p class="mb-1 text-xl font-bold tracking-tight text-gray-900"> {{ item.price }} ₽ </p>
                </div>
                <div v-else class="animate-pulse mt-1 text-xl font-bold tracking-tight text-gray-900 h-6 w-full bg-gray-200">
                </div>
                <!-- <p class="truncate md:text-clip mb-2 text-sm font-bold tracking-tight text-gray-600"> {{ item.description }} </p> -->
            </div>
            <div class="w-full">
                <button 
                    type="button" 
                    :disabled="item == undefined"
                    @click="onClickDetails"
                    class="text-white w-full bg-blue-500 disabled:bg-blue-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                    :class="item == undefined ? 'animate-pulse' : ''"
                > Поподробнее </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProduct } from 'types/index.js';

const props = defineProps<{
    onClickDetails?: () => void,
    item?: IProduct
}>();

// const emit = defineEmits(['change', 'delete']);

</script>