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
        transition: 1s;
    }

    a:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: #2c6565;
        height: 100%;
        width: 101%;
        z-index: -1;
        transition: 1s;
        transform: rotateX(90deg);
    }

    a:hover:after {
        transform: rotateX(0);
    }

    a:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: #2c6565;
        height: 100%;
        width: 101%;
        z-index: -1;
        transition: 1s;
        transform: rotateY(90deg);
    }

    a:hover:before {
        transform: rotateY(0);
    }

    a:hover {
        color: white;
    }
</style>