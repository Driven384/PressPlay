<script setup lang="ts">
    import MainHeader from './MainHeader.vue';
    import MainNav from './MainNav.vue';
    import { ref } from "vue";
    import { useHeaderStore } from '../stores/store';

    defineProps({
        showHeader: {
            type: Boolean,
            default: false
        },
        toolNav: {
            type: Boolean
        },
        full: {
            type: Boolean
        },
    });

    const headerStore = useHeaderStore();
    const isMenuOpen = ref(false);
    const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
    const closeMenu = () => isMenuOpen.value = false;
</script>

<template>
    <MainHeader v-if="showHeader" :isOpen="isMenuOpen" :title="headerStore.title" @toggle-nav="toggleMenu" />

    <MainNav :isOpen="isMenuOpen" @item-click="closeMenu" />

    <main class="container h-max pt-24 pb-24">
        <slot></slot>
    </main>
</template>