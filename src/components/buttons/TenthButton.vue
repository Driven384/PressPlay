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
        transition: all 0.3s;
        font-variant-caps:all-small-caps;
        /* overflow: hidden; */
    }

    a::before {
        content: '';
        position: absolute;
        top: -.5rem;
        left: -.5rem;
        background-color: #42c3d3;
        width: 100%;
        height: 100%;
        z-index: -1;
        mix-blend-mode: multiply;
    }

    a::after {
        content: '';
        position: absolute;
        top: .5rem;
        left: .5rem;
        background-color: #399da7;
        width: 100%;
        height: 100%;
        z-index: -1;
        mix-blend-mode: multiply;
    }

    a:hover {
        background-color: transparent;
        color: black;
    }

    a:hover:before {
        top: -1rem;
        left: 0;
        transform: perspective(175px) rotateX(80deg);
    }

    a:hover:after {
        top: 1rem;
        left: 0;
        transform: perspective(175px) rotateX(-80deg);
    }
</style>