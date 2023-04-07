<template>
    <div v-if="productList.length > 0" class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="(product, index) of productList" :key="index" class="group relative">
            <Card 
                :item="product"
                :on-click-details="() => handleClickDetails(index)"
            />
        </div>
    </div>
    <div v-else class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="i in 10" :key="i" class="group relative">
            <Card />
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProduct } from '~/types';
import { onMounted } from 'vue';
import { useStore } from '~/store/';
import { storeToRefs } from 'pinia';

const route = useRoute();
const store = useStore();
const { productList } = storeToRefs(store)

onMounted(async () => {
  store.fetchProductList();
})

const handleClickDetails = (index: number) => {
    console.log("index", index)
}

const products: IProduct[] = [
    {
        id: 1,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: 2000,
        details: [
            { title: "Цвет", description: "Черный" }
        ],
        description: "Крутая рубашка честно крутая блин"
    },
    {
        id: 1,
        name: "Test Name Очень длинное название!!!",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: 2000,
        details: [
            { title: "Цвет", description: "Черный" },
            { title: "Размер", description: "XXL" },
        ],
        description: "Крутая рубашка честно крутая блин"
    },
    {
        id: 1,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: 2000,
        details: [],
        description: ""
    },
    {
        id: 1,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: 2000,
        details: [],
        description: "Крутая рубашка честно крутая блин"
    },
    {
        id: 1,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: 2000,
        details: [],
        description: ""
    },
    {
        id: 1,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: 2000,
        details: [],
        description: "Крутая рубашка честно крутая блин"
    },
]
</script>

