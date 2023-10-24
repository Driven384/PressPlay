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
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 2px;
        text-transform: uppercase;
        width: 250px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        text-decoration: none;
        position: relative;
        transition: all 0.3s;
    }

    a:before {
        content: '';
        position: absolute;
        top: -15px;
        left: -3px;
        width: 250px;
        height: 90px;
        border-left: 3px solid #c67a7b;
        border-right: 3px solid #8f3a34;
        transition: all 0.5s;
    }

    a:after {
        content: '';
        position: absolute;
        top: 0;
        left: -15px;
        width: 280px;
        height: 60px;
        border-top: 3px solid #c67a7b;
        border-bottom: 3px solid #8f3a34;
        transition: all 0.5s;
    }

    a:hover:before {
        transform: rotateY(180deg);
    }

    a:hover:after {
        transform: rotateX(180deg);
    }

    /* a:hover {
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
    } */
</style>