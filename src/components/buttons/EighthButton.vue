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
        background-color: #2c6565;
        color: white;
        font-family: 'Lexend', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 2px;
        padding: 0.5rem 1rem;
        text-decoration: none;
        position: relative;
        transition: 1s;
    }

    a:before {
        content: 'Eighth Button';
        position: absolute;
        top: 0;
        left: 0;
        background-color: tomato;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotateX(270deg);
        transform-origin: top;
        transition: all 0.5s;
    }

    a:hover:before {
        transform: rotateX(0);
    }

    a:after {
        content: 'Eighth Button';
        position: absolute;
        top: 0;
        left: 0;
        background-color: darkmagenta;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotateX(270deg);
        transform-origin: top;
        transition: all 0.5s;
        transition-delay: 0.25s;
    }

    a:hover:after {
        transform: rotateX(0);
    }
</style>