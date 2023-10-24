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
        color: white;
        background-color: #2c6565;
        font-family: 'Lexend', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 2px;
        text-decoration: none;
        position: relative;
        transition: all 0.3s;
        width: 250px;
        height: 60px;
        text-align: center;
        line-height: 60px;
    }

    a:before {
        content: '';
        position: absolute;
        top: -6px;
        left: -6px;
        width: 24px;
        height: 24px;
        border-left: 3px solid #2c6565;
        border-top: 3px solid #2c6565;
        transition: all 0.5s;
    }

    a:after {
        content: '';
        position: absolute;
        bottom: -6px;
        right: -6px;
        width: 24px;
        height: 24px;
        border-right: 3px solid #2c6565;
        border-bottom: 3px solid #2c6565;
        transition: all 0.5s;
    }

    a:hover:before, a:hover:after {
        height: 100%;
        width: 100%;
    }
</style>