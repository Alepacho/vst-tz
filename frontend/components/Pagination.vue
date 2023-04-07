<template>
    <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
            <li>
                <button @click="handleClickPrev"
                    class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                    <span class="sr-only">Previous</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </li>

            <li v-for="index in count" :key="index">
                <button @click="(event) => handleClickPage(event, index)"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    :class="current == index ? 'bg-gray-200' : ''"
                > {{ index }} </button>
            </li>
            <li>
                <button @click="handleClickNext"
                    class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                    <span class="sr-only">Next</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useStore } from '~/store/';
import { storeToRefs } from 'pinia';

const store = useStore();
const { productList, productCount } = storeToRefs(store)
const count = ref<number>(Math.floor(productCount.value / 10))
const current = 1
const handleClickPrev = () => { console.log("Prev") }
const handleClickNext = () => { console.log("Next") }
const handleClickPage = (event: Event, index: number) => { console.log("Index:", index)}
</script>