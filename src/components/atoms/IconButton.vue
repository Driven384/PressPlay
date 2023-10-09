<script setup lang="ts">
    defineProps({
        icon: String,
        title: String
    });
</script>

<template>
    <button 
        class="hover:scale-105 transition ease-in-out delay-100 hover:text-[#CD605F]"
        title="title"
        >
        <font-awesome-icon :icon="icon" size="2xl" />
    </button>
</template>