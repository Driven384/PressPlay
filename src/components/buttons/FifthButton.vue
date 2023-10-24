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
        transition: all 0.3s;
        overflow: hidden;
    }

    a:hover {
        background-color: #2c6565;
        color: white;
    }

    a:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
        width: 100%;
        height: 20px;
        transform: translateX(-100%) rotate(45deg);
        transition: all 0.3s;
    }

    a:hover:before {
        transform: translateX(100%) rotate(45deg);
    }
</style>