<template>
    <button
        type="button"
        class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
        :class="class"
        @click="onClick"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes,
    onClick: () => void
}>();
</script>