<script setup lang="ts">
    defineProps(['isOpen', 'false']);
</script>

<template>
    <button 
        :class="[
            'group/menu-toggle-button w-14 h-14 justify-center items-center gap-2.5 inline-flex cursor-pointer', 
            { 'border-secondary-800': isOpen }
        ]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
            <path 
                d="M0 0H24V2.83333H0V0ZM0 7.08333H24V9.91667H0V7.08333ZM0 14.1667H24V17H0V14.1667Z" 
                class="fill-stone-950 group-hover/menu-toggle-button:fill-[#CD605F]"/>
        </svg>
    </button>
</template>