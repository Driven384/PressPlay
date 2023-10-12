<script setup>
  import { onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';
  import MainLayout from '@/components/layouts/MainLayout.vue';
  import Card from '../components/molecules/CardComponent.vue';
  import { useHeaderStore } from '../stores/store';

  const headerStore = useHeaderStore();
  const router = useRouter();
  const items = [
    {id: '37i9dQZF1E4odvSnkQbxnE', title: 'Rise Against Radio', image: '/src/assets/headphones.png'},
    {id: '37i9dQZF1E37kBYki1P10Y', title: 'Daily Mix 5', image: '/src/assets/daily.png'},
    {id: '37i9dQZF1DXdo6A3mWpdWx', title: '90s Party', image: '/src/assets/90s.png'},
    {id: '37i9dQZF1EQpj7X7UK8OOF', title: 'Rock Mix', image: '/src/assets/rock.png'},
  ]

  onBeforeMount(async () => {
    headerStore.setTitle('');
  });

  const goToList = (id) => {
      router.push({ name: 'playlist', params: { id: id } });
  };
</script>

<template>
    <MainLayout show-header>
        <div class="flex flex-col gap-8 pr-6">
          <div class="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full mb-12 sm:mb-24">
            <div class="w-full h-full absolute border-4 border-black"></div>
            <img class="w-full h-full ml-6 mt-6 absolute border-4 border-black object-cover" src="@/assets/header-image.png" />
            <div class="w-full px-4 sm:px-24 py-4 sm:py-8 left-0 bottom-0 absolute bg-white border-4 border-black justify-center items-center gap-2.5 inline-flex">
              <div class="text-center text-stone-950 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Lexend']">Embark on a musical journey with PressPlay</div>
            </div>
          </div>

          <p class="text-xl sm:text-4xl font-bold font-['Lexend']">Checkout these playlists</p>
          
          <div id="cards" class="flex flex-wrap gap-12 justify-center">
              <Card v-for="item in items" :key="item.id" :button-title="item.title" :image="item.image" @click="goToList(item.id)"></Card>
          </div>
        </div>
        
    </MainLayout>
</template>