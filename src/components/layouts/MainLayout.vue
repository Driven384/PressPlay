<script setup lang="ts">
    import MainHeader from '../molecules/MainHeader.vue';
    import MainNav from '../molecules/MainNav.vue';
    import MainButton from '../atoms/MainButton.vue';
    import { ref } from "vue";
    import { useHeaderStore } from '../../stores/store';
    import { useRouter } from 'vue-router';

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
        return: {
            type: Boolean
        }
    });

    const headerStore = useHeaderStore();
    const isMenuOpen = ref(false);
    const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
    const closeMenu = () => isMenuOpen.value = false;
    const router = useRouter();
</script>

<template>
    <MainHeader v-if="showHeader" :isOpen="isMenuOpen" :title="headerStore.title" @toggle-nav="toggleMenu" />

    <MainNav :isOpen="isMenuOpen" @item-click="closeMenu" />

    <main class="container h-max pt-24 pb-24">
        <MainButton v-if="return" title="Return" @click="router.back()"></MainButton>
        <slot></slot>
    </main>
</template>