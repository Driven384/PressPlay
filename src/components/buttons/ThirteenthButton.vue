<script setup lang="ts">
    defineProps({
        title: String
    });
</script>

<template>
    <a href="">
        <span></span>
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
        text-decoration: none;
        position: relative;
        width: 250px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        overflow: hidden;
    }

    a:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 3px;
        background-color: #2c6565;
        transition: all 1s;
    }

    a:after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 3px;
        background-color: #2c6565;
        transition: all 1s;
    }

    span:before {
        content: '';
        position: absolute;
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background-color: #2c6565;
        transition: all 1s;
    }

    span:after {
        content: '';
        position: absolute;
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background-color: #2c6565;
        transition: all 1s;
    }

    a:hover:before {
        left: 0;
    }

    a:hover:after {
        right: 0;
    }

    a:hover span:before {
        top: 0;
    }

    a:hover span:after {
        bottom: 0;
    }
</style>