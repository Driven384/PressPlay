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
        color: transparent;
        background-color: #2c6565;
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
        content: 'Hover me';
        position: absolute;
        top: 0;
        left: 0;
        background-color: #d79d9f;
        color:#2c6565;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
    }

    a:after {
        content: 'Hover me';
        position: absolute;
        top: 0;
        left: 0;
        background-color: #d79d9f;
        color:#2c6565;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        transform: translate(-100%, 100%);
    }

    a:hover:before {
        transform: translate(100%, -100%);
    }

    a:hover:after {
        transform: translate(0, 0);
    }
</style>