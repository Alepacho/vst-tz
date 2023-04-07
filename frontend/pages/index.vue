<template>
    <div v-if="productList.length > 0" class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <!-- {{ getFilteredProductList }} -->
        <div v-for="(product, index) of getFilteredProductList" :key="index" class="group relative">
            <Card 
                :item="product"
                :on-click-details="() => handleClickDetails(product.id)"
            />
        </div>
    </div>
    <div v-else class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="i in 10" :key="i" class="group relative">
            <Card />
        </div>
    </div>
    <div v-show="productCount > productList.length" class="mt-6 flex justify-center">
        <Pagination/>
    </div>
</template>

<script setup lang="ts">
import { IProduct } from '~/types';
import { onMounted, onUnmounted, onUpdated, ref, onActivated } from 'vue';
import { useStore } from '~/store/';
import { storeToRefs } from 'pinia';
let init = false;

const router = useRouter();
const store = useStore();
const { productList, getFilteredProductList, productCount } = storeToRefs(store)
let interval: any;

onMounted(() => {
    console.log("mount")
    
    let loaded = false;
    interval = setInterval(() => {
        // тут надо добавить проверну на то если вернулись на эту страницу
        // чтобы обновились данные
        if (productList.value.length > 0) loaded = true;

        if (loaded == true) {
            clearInterval(interval)
        } else {
            console.log("fetching product list")
            store.fetchProductList();
        }
    }, 2000)
})

onUnmounted(() => clearInterval(interval))

onUpdated(() => {
    console.log("update")
    if (!init) {
        init = true
        console.log("init")
    }
})

onActivated(() => {
    console.log("active")
})

const handleClickDetails = (index: number | undefined) => {
    if (index === undefined) {
        console.log("Unknown index:", index);
        return;
    } else console.log("index", index);

    router.push({ path: `/product/${index}` });
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

<!-- <script lang="ts">
export default {
    setup(props, { expose }) {

    }
}
</script> -->