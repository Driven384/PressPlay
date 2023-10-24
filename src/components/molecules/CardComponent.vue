<script setup lang="ts">
    import MainButton from '../buttons/MainButton.vue';

    defineProps({
        buttonTitle: String,
        image: String,
        text: String,
    });
</script>

<template>
    <div class="group/card relative w-80 min-h-[250px] max-h-80 bg-gradient cursor-pointer transition ease-in-out delay-100 hover:scale-105 border-2 border-stone-950">
        <img v-if="image" :src="image" alt="image" class="w-full h-full object-cover" />
        <div v-if="text" class="mb-8 p-8">
            <p>{{ text }}</p>
        </div>
        <div class="absolute -right-[2px] -bottom-[2px]">
            <MainButton :title="buttonTitle" group="card"></MainButton>
        </div>
    </div>
</template>