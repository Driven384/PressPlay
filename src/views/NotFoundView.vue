<script setup lang="ts">
import MainLayout from '@/components/MainLayout.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <MainLayout>
        <div class="flex justify-center w-full h-0 pb-[75%] relative">
            <iframe src="https://giphy.com/embed/gHPn1MdH7PVH3uBUqY" frameBorder="0" class="w-full h-full absolute opacity-40 giphy-embed pointer-events-none" allowFullScreen></iframe>
            <h1 class="absolute mt-12 text-xl">Oh no! You seem to be lost, best to go <RouterLink class="text-green-500 underline" to="/">home</RouterLink> then.</h1>
        </div>
    </MainLayout>
</template>