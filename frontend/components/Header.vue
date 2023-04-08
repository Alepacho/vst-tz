<template>
    <header class="bg-white dark:bg-gray-800">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-4" aria-label="Global">
            <!-- LOGO -->
            <div class="flex lg:flex-1">
                <NuxtLink href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only"> VST </span>
                    <img class="h-10 w-auto" src="/logo.png" alt="" />
                </NuxtLink>
            </div>
            
            <!-- SEARCH ELEMENT -->
            <div class="flex justify-center">
                <div class="md:w-96">
                    <div class="relative flex w-full flex-wrap items-stretch">
                    <input
                        type="search" v-on:input="(event) => handleSearch(event)"
                        class="relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                        placeholder="Поиск"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                    <span
                        class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2">
                        <MagnifyingGlassIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                    </span>
                    </div>
                </div>
            </div>

            <!-- MENU OPEN BUTTON (MOBILE) -->
            <!-- <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                    <span class="sr-only"> Open main menu </span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div> -->


            <!-- <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                <Popover class="relative">
                    <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                        Product
                        <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </PopoverButton>

                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                        <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div class="p-4">
                            <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                            </div>
                            <div class="flex-auto">
                                <a :href="item.href" class="block font-semibold text-gray-900">
                                {{ item.name }}
                                <span class="absolute inset-0" />
                                </a>
                                <p class="mt-1 text-gray-600">{{ item.description }}</p>
                            </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                            <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                            <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            {{ item.name }}
                            </a>
                        </div>
                        </PopoverPanel>
                    </transition>
                </Popover>

                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
            </PopoverGroup> -->

            

            <!-- ADD ITEM BUTTON -->
            <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <button class="rounded-md bg-sky-500 hover:bg-sky-700 flex items-center justify-center gap-x-2.5 p-2 text-sm font-semibold leading-6 text-gray-100">
                    Добавить товар
                    <span> <PlusIcon class="h-5 w-5 flex-none" aria-hidden="true" /> </span>
                </button>
            </div> -->
            <!-- <span aria-hidden="true">&rarr;</span> -->
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  PlusIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import { useStore } from '~/store/';
import { storeToRefs } from 'pinia';

const mobileMenuOpen = ref(false)
const store = useStore();

const handleSearch = (event: any) => {
    console.log("search", event)
    store.setSearchInput(String(event.target.value))
}
</script>

<script lang="ts">


</script>