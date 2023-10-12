<script setup lang="ts">
  import { onBeforeMount } from 'vue';
  import { useHeaderStore } from '../stores/store';
  import MainLayout from '../components/layouts/MainLayout.vue';

  const headerStore = useHeaderStore();

  onBeforeMount(async () => {
    headerStore.setTitle('About');
  });
</script>

<template>
  <MainLayout show-header>
    <h1 class="text-4xl font-bold font-['Lexend']">Hi, I'm Manon</h1>
    <div class="grid sm:grid-cols-2 gap-8">
      <p>Get to know a bit me, by listing to my playlists in this app. PressPlay is a project that is under development and I will use it to learn and display new techniques in frontend development.</p>
      <div class="bg-white border-2 border-stone-950 p-2 flex justify-center items-center">
        <p>If you like to know more about my work experience, please visit <a class="underline cursor-pointer" href="https://linkedin.com/in/manon-schreuder" title="linkedin page" target="_blank">my linkedin page</a>.</p>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="text-xl font-bold font-['Lexend']">Techniques used in this project</h4>
        <ul class="flex flex-col gap-1">
          <li>Vue3</li>
          <li>Typescript</li>
          <li>Vue Router</li>
          <li>Vitest</li>
          <li>TailwindCSS</li>
          <li>Fontawesome</li>
          <li>Spotify API</li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="text-xl font-bold font-['Lexend']">Other tools</h4>
        <ul class="flex flex-col gap-1">
          <li>Figma</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  </MainLayout>
</template>
