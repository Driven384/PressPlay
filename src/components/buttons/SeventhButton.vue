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
        letter-spacing: 2px;
        padding: 0.5rem 1rem;
        text-decoration: none;
        border: 3px solid #2c6565;
        position: relative;
        transition: all 0.5s;
        overflow: hidden;
    }

    a:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: #2c6565;
        width: 100%;
        z-index: -1;
        border-radius: 0 0 50% 50%;
        height: 0%;
        transition: all 0.5s;
    }

    a:hover:before {
        height: 190%;
    }

    a:hover {
        color: white;
    }
</style>