<script setup lang="ts">
import MenuToggleButton from '../atoms/MenuToggleButton.vue';
import { RouterLink } from 'vue-router';

defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    title: {
        type: String
    }
});
</script>

<template>
    <header class="fixed w-full flex h-14 shadow-md items-center z-10 bg-[#FBEDED]">
        <div class="flex basis-1/3 items-center h-full ml-2">
            <MenuToggleButton :isOpen="isOpen" @click="$emit('toggle-nav')"></MenuToggleButton>
            <RouterLink to="/"><img alt="PressPlay logo" class="w-20 h-14 py-2" src="@/assets/logo-text.svg" /></RouterLink>
        </div>
        <div class="flex basis-1/3 justify-center text-2xl text-stone-950">{{ title }}</div>
    </header>
</template>