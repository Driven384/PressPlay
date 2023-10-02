<script setup lang="ts">
  import { onBeforeMount } from 'vue';
  import { useHeaderStore } from '../stores/store';
  import MainLayout from '@/components/MainLayout.vue';

  const headerStore = useHeaderStore();

  onBeforeMount(async () => {
    headerStore.setTitle('About');
  });
</script>

<template>
  <MainLayout show-header>
    <p>Hi, I'm Manon. Get to know a bit me, by listing to my playlists in this app. PressPlay is a project that is under development and I will use it to learn and display new techniques in frontend development. I you like to no more about me, please visit <a class="underline" src="www.linkedin.com/in/manon-schreuder">my linkedin page</a>.</p>
  </MainLayout>
</template>
