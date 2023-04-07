<template>
    <!-- ! я бы в ~/pages/admin/ папку положил этот компонент, но для этого надо с конфинами разбираться -->
    <form class="max-w-md m-auto">
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Добавление товара</h2>
                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                        <label for="product_title" class="block text-sm font-medium leading-6 text-gray-900"> Название
                        </label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input 
                                    v-model="newItem.name"
                                    type="text" name="product_title"
                                    id="product_title" autocomplete="product_title"
                                    class="block flex-1 rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Новый Продукт"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="product_price" class="block text-sm font-medium leading-6 text-gray-900"> Цена </label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input 
                                    v-model="newItem.price"
                                    type="number" name="product_price" 
                                    id="product_price" autocomplete="product_price"
                                    class="block flex-1 rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Новый Продукт"  />
                            </div>
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="description" class="block text-sm font-medium leading-6 text-gray-900"> Описание
                        </label>
                        <div class="mt-2">
                            <textarea 
                                v-model="newItem.description"
                                id="description" name="description" rows="3"
                                class="block w-full rounded text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                placeholder="Напишите что-нибудь веселое тут. Все равно это не настоящий онлайн магазин." />
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="product-image" class="block text-sm font-medium leading-6 text-gray-900"> Изображение
                        </label>
                        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div v-if="newItem.image.length > 0">
                                <img :src="newItem.image" draggable="false" style="object-fit: fill"/>
                            </div>
                            <div v-else>
                                <div class="text-center">
                                    <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="file-upload"
                                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span class="p-1"> Загрузите изображение </span>
                                            <input 
                                                v-on:change="event => handleFileLoad(event)"
                                                ref="file"
                                                id="file-upload" name="file-upload" 
                                                type="file" class="sr-only"
                                                accept="image/*"
                                            />
                                        </label>
                                        <p class="pl-1"> или перенестие его. </p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600"> в формате PNG, JPG, GIF до 10MB </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="product_details" class="block text-sm font-medium leading-6 text-gray-900">
                            Характеристики </label>
                        <div class="mt-2">
                            <!-- RENDER LIST -->
                            <div v-for="(detail, index) in newItem.details" :key="index" class="flex my-1">
                                <!-- KEY -->
                                <div type="text"
                                    class="w-1/3 truncate md:text-clip inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md"
                                >
                                    {{ detail.title }}
                                </div>
                                <!-- VALUE -->
                                <div type="text" id="website-admin"
                                    class="w-1/2 truncate md:text-clip rounded-none bg-gray-50 border border-r-0 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                >
                                    {{ detail.description }}
                                </div>
                                <!-- DELETE BUTTON -->
                                <button type="button" @click="onDeleteDetail(index)"
                                    class="rounded-r-md border border-gray-300 px-3 py-2 bg-gray-100 hover:bg-red-400 font-semibold text-white shadow-sm">
                                    <TrashIcon class="h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
                                </button>
                            </div>

                            <!--  -->
                            <div class="flex my-1">
                                <input type="text" v-model="newDetail.title"
                                    class="w-1/3 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md"
                                    placeholder="Название" />
                                <input type="text" id="website-admin" v-model="newDetail.description"
                                    class="w-1/2 rounded-none bg-gray-50 border border-r-0 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                    placeholder="Значение">
                                <button type="button" @click="onAddDetail"
                                    class="rounded-r-md border border-gray-300 px-3 py-2 bg-indigo-600 hover:bg-indigo-500 font-semibold text-white shadow-sm">
                                    <PlusIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit" @click="onClickSubmitCallback"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Добавить </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue"
import {
    PlusIcon,
    TrashIcon
} from '@heroicons/vue/24/outline'
import { PhotoIcon } from '@heroicons/vue/24/solid'
import { IProduct, IDetail } from '~/types';
import { useStore } from '~/store/';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  onClickSubmit: (product: IProduct) => void
}>();

</script>

<script lang="ts">
const store = useStore()
const { productList } = storeToRefs(store)

export default {
    data() {
        return {
            newItem: {
                name: "",
                price: 0,
                image: "",
                details: [],
                description: ""
            } as IProduct,
            newDetail: {
                title: "",
                description: ""
            }
        }
    },
    methods: {
        async handleFileLoad(event: any) {
            console.log("selected file", event)
            const file: any = this.$refs.file
            console.log({file})

            var reader = new FileReader();
            reader.onloadend = () => {
                const r = reader.result
                if (typeof r === "string") {
                    this.newItem.image = r
                } else {
                    console.log("Invalid File!", r)
                }
            }
            reader.readAsDataURL(file.files[0]);

            // 
        },
        productIsValid() {
            const ni = this.newItem;
            if (ni.name.length > 0
            &&  ni.price > 0
            &&  ni.image.length > 0
            &&  ni.details.length > 0
            &&  ni.description.length > 0) return true;
            return false
        },
        onClickSubmitCallback(event: Event) {
            console.log("Submit!", event);
            event.preventDefault();

            // console.log(getProductList)
            console.log(productList)
            console.log(store.productList)
            
            console.log(this.newItem)
            if (this.productIsValid())
                this.onClickSubmit(this.newItem);
            else
                console.log("Invalid Product!")
        },
        clearNewDetail() {
            this.newDetail = {
                title: "",
                description: ""
            }
        },
        onAddDetail() {
            console.log("New Item:", this.newDetail);
            if (
                this.newDetail.title.length > 0 &&
                this.newDetail.description.length > 0
            ) {
                this.newItem.details.push(this.newDetail);
                this.clearNewDetail();
            } else {
                console.log("This item is invalid!");
            }
        },
        onDeleteDetail(index: number) {
            this.newItem.details.splice(index, 1);
            console.log("Deleting Item:", index);
        }
    }
}
</script>