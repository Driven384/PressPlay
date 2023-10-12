<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    defineProps({
        title: String,
        to: [String, Object]
    });
    const emit = defineEmits(['item-click']);
</script>

<template>
    <RouterLink
        v-if="to"
        id="menu-button-link"
        class="group/menu-button-link w-full h-[58px] pl-4 pt-4 pb-2 border-b border-stone-950 hover:border-gingerFlower justify-start items-center gap-2 inline-flex"
        :to="to"
        @click="emit('item-click')">
        <div class="text-stone-950 group-hover/menu-button-link:text-gingerFlower group-active/menu-button-link:text-gingerFlower text-xl font-normal">{{ title }}</div>
    </RouterLink>
</template>