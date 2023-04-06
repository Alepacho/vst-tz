<template>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
        <div v-for="product in products" :key="product.id" class="group relative">
            <Card :item="product"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProduct } from '~/types';

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

