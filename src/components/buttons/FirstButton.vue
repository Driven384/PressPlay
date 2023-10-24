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
        font-weight: 500;
        padding: 0.5rem 1rem;
        text-decoration: none;
        border: 3px solid #2c6565;
        position: relative;
        overflow: hidden;
    }

    a:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: #d79d9f;
        height: 100%;
        width: 105%;
        z-index: -1;
        transform-origin: bottom left;
        transform: rotate(-90deg);
        transition: transform 1s;
    }

    a:hover:before {
        transform: rotate(0deg);
    }
</style>