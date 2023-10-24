<script setup lang="ts">
    defineProps({
        title: String,
        group: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <button 
        :class="{'bg-white hover:bg-stone-950 text-stone-950 hover:text-white lowercase py-2 px-4 border-2 border-stone-950 transition-all': true,
            [`group-hover/${group}:bg-stone-950 group-hover/${group}:text-white`]: group,
        }">
        {{ title }}
    </button>
</template>