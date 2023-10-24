<script setup lang="ts">
    defineProps({
        title: String
    });
</script>

<template>
    <a href="">
        {{ title }}
    </a>
</template>

<style scoped>
    a {
        color: #2c6565;
        font-family: 'Lexend', sans-serif;
        font-size: 1.5rem;
        font-weight: 300;
        padding: 0.5rem 1rem;
        text-decoration: none;
        border: 2px solid #2c6565;
        position: relative;
        transition: all 0.5s;
    }

    a:hover {
        font-weight: 600;
        letter-spacing: 2px;
        border: 5px solid #2c6565;
    }
</style>