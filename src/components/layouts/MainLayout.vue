<script setup lang="ts">
    import MainHeader from '../molecules/MainHeader.vue';
    import MainNav from '../molecules/MainNav.vue';
    import IconButton from '../atoms/IconButton.vue';
    import { ref } from "vue";
    import { useHeaderStore } from '../../stores/store';
    import { useRouter } from 'vue-router';

    defineProps({
        showHeader: {
            type: Boolean
        },
        showReturn: {
            type: Boolean
        }
    });

    const headerStore = useHeaderStore();
    const router = useRouter();
    const isMenuOpen = ref(false);
    const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
    const closeMenu = () => isMenuOpen.value = false;
</script>

<template>
    <div>
        <MainHeader v-if="showHeader" :isOpen="isMenuOpen" :title="headerStore.title" @toggle-nav="toggleMenu" />

        <MainNav :isOpen="isMenuOpen" @item-click="closeMenu" />

        <main class="container h-max pt-24 pb-24 flex flex-col gap-10">
            <div>
                <IconButton v-if="showReturn" icon="arrow-left-long" title="Return to the previous page" @click="router.back()" />
            </div>
            <slot></slot>
        </main>
    </div>
</template>