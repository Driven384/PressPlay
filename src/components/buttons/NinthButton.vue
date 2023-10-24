<script setup lang="ts">
    defineProps({
        title: String
    });
</script>

<template>
    <a href="">
       <span></span>{{ title }}
    </a>
</template>

<style scoped>
    a {
        color: #2c6565;
        background-color: transparent;
        font-family: 'Lexend', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 2px;
        padding: 0.5rem 1rem;
        text-decoration: none;
        position: relative;
        transition: all 0.5s;
    }

    a:before, a:after {
        content: '';
        position: absolute;
        top: 50%;
        background-color: #2c6565;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        transform: translateY(-50%);
        transition: all 0.3s;
        z-index: -1;
        opacity: 0;
    }

    a:before {
        left: 0;
        box-shadow: -100px 0 0 #2c6565;
    }

    a:after {
        right: 0;
        box-shadow: 100px 0 0 #2c6565;
    }

    a:hover::before {
        left: 50%;
        box-shadow: 30px 0 0 #2c6565;
        transform: translateX(-50%) translateY(-50%);
        opacity: 1;
    }

    a:hover::after {
        right: 50%;
        box-shadow: -30px 0 0 #2c6565;
        transform: translateX(50%) translateY(-50%);
        opacity: 1;
    }

    span {
        position: absolute;
        z-index: -1;
        color: white;
        height: 100%;
        width: 100%;
        background-color: #2c6565;
        top: 0;
        left: 0;
        transform: scale(0);
        transition: all 0.3s;
    }

    a:hover span {
        transform: scale(1);
        transition-delay: 0.4s;
    }

    a:hover {
        color: white;
        transition-delay: 0.4s;
    }
</style>