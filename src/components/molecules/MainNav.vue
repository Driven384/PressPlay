<script setup lang="ts">
    import MenuButton from '../buttons/MenuButton.vue';
    import { ref } from 'vue';
    import { onClickOutside } from '@vueuse/core';

    defineProps(['isOpen', 'false']);
    const emit = defineEmits(['item-click']);
    const menuRef = ref(null);

    onClickOutside(menuRef, () => {
        emit('item-click');
    });
</script>

<template>
    <div 
        ref="menuRef"   
        :class="{
            'transition-all duration-1000 h-screen mt-1 pt-14 pr-8 fixed z-10 bg-background': true,
            '-left-56 w-56': !isOpen,
            'left-0 w-56 shadow-md': isOpen
        }">
      <nav class="flex flex-col text-xl">
        <MenuButton to="/" title="home" @item-click="emit('item-click')"></MenuButton>
        <MenuButton to="/about" title="about" @item-click="emit('item-click')"></MenuButton>
      </nav>
    </div>
</template>