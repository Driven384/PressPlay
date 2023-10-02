<script setup lang="ts">
    import gradientImage from '@/assets/gradient.svg';

    defineProps({
        buttonTitle: String,
        image: {String, default: gradientImage},
        text: String,
    });
</script>

<template>
    <div class="group/card relative w-80 h-fit max-h-80 bg-orange-50 cursor-pointer transition ease-in-out delay-100 hover:scale-105 border-2 border-stone-950">
        <img v-if="image" :src="image"  alt="album cover" class="w-full h-full object-cover" />
        <div v-if="text" class="mb-8 p-8">
            <p>{{ text }}</p>
        </div>
        <button 
            class="absolute -right-[2px] -bottom-[2px] bg-white group-hover/card:bg-stone-950 text-stone-950 group-hover/card:text-white py-2 px-4 border-2 border-stone-950">
            {{ buttonTitle }}
        </button>
    </div>
</template>