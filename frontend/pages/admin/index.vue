<template>
    <div class="min-h-screen">
        <h1 class="font-bold text-xl"> Данная страница предназначена для добавления товаров в базу данных </h1>
        <br>
        <Button :on-click="onClickAddProduct"> добавить новый товар </Button>
        <TransitionRoot as="template" :show="showModal">
            <Dialog as="div" class="relative z-10" @close="showModal = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild 
                        as="template" 
                        enter="ease-out duration-300" 
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" 
                        enter-to="opacity-100 translate-y-0 sm:scale-100" 
                        leave="ease-in duration-200" 
                        leave-from="opacity-100 translate-y-0 sm:scale-100" 
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-2 pb-4 pt-3 sm:p-4 sm:pb-2">
                            <div class="sm:flex sm:items-start">
                                <ModalNewItem :on-click-submit="(product: IProduct) => modalOnClickSubmit(product)" />
                            </div>
                        </div>
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <br>
        <h1 class="font-bold text-xl"> Список товаров </h1>
        <div>
            <div v-if="productList.length > 0">
                <div v-for="product in productList" :key="product.id" class="group relative">
                    <Card :item="product"/>
                </div>
            </div>
            <div v-else>
                <h1 class="text-md"> Не найдено товаров </h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useStore } from '~/store/';
import { storeToRefs } from 'pinia';
import { IProduct } from '~/types';
</script>

<script lang="ts">
const store = useStore()
const { productList } = storeToRefs(store)

export default {
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        modalOnClickSubmit(product: IProduct) {
            console.log("ModalNewItem modalOnClickSubmit", product)
            store.addProductToList(product)
            this.showModal = false
        },
        onClickAddProduct() {
            // console.log("open", open)
            this.showModal = true
        }
    }
}
</script>