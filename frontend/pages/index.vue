<template>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
            <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img :src="product.image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-700">
                        <div>
                            <span aria-hidden="true" class="absolute inset-0" />
                            {{ product.name }}
                        </div>
                    </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const products = [
    {
        id: 1,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: "2000р"
    },
    {
        id: 2,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: "2000р"
    },
    {
        id: 3,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: "2000р"
    },
    {
        id: 4,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: "2000р"
    },
    {
        id: 5,
        name: "Test Name",
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: "2000р"
    },
]
</script>

