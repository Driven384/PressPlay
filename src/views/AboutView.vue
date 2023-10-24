<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { useHeaderStore } from '../stores/store';
  import MainLayout from '../components/layouts/MainLayout.vue';
  import MainButton from '@/components/buttons/MainButton.vue';
  import AnimatedButtonsWrapper from '@/components/molecules/AnimatedButtonsWrapper.vue';
  import AnimatedImagesWrapper from '@/components/molecules/AnimatedImagesWrapper.vue';

  const headerStore = useHeaderStore();
  const showButtons = ref(false);
  const showImages = ref(false);

  onBeforeMount(async () => {
    headerStore.setTitle('About');
  });
</script>

<template>
  <MainLayout show-header>
    <h1 class="text-4xl font-bold font-['Lexend']">Hi, I'm Manon</h1>
    <div class="grid sm:grid-cols-2 gap-8">
      <p>Get to know a bit me, by listening to my playlists in this app. PressPlay is a project that is under development and it will be used it to learn and display new techniques in frontend development.</p>
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
    <MainButton class="w-[260px]" title="Explore animated buttons" @click="showButtons = !showButtons"></MainButton>

    <Transition>
        <AnimatedButtonsWrapper v-if="showButtons"></AnimatedButtonsWrapper>
    </Transition>

    <MainButton class="w-[260px]" title="Explore animated images" @click="showImages = !showImages"></MainButton>

    <Transition>
        <AnimatedImagesWrapper v-if="showImages"></AnimatedImagesWrapper>
    </Transition>
  </MainLayout>
</template>
