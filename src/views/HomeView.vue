<script setup>
  import { onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';
  import HomeLayout from '@/components/layouts/HomeLayout.vue';
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
    <HomeLayout>
        <div class="flex flex-col gap-0 md:gap-8">
          <div class="w-full z-10 flex flex-col h-[450px] md:h-[600px]">
            <div class="h-full bg-cover bg-center brightness-75 bg-[url('/src/assets/header-image.png')]"></div>
            <div class="relative ml-16 sm:m-auto flex flex-end px-4 sm:px-24 py-4 sm:py-8 bottom-14 bg-white border-4 border-stone-950 justify-center items-center">
              <div class="text-center text-stone-950 text-2xl sm:text-4xl md:text-5xl font-semibold font-['Lexend']">
                Embark on a musical journey with PressPlay
              </div>
            </div>
          </div>

          <div class="container flex flex-col gap-8">
            <p class="text-xl sm:text-4xl font-bold font-['Lexend']">Checkout these playlists</p>
            <div id="cards" class="flex flex-wrap gap-12 justify-center">
                <Card v-for="item in items" :key="item.id" :button-title="item.title" :image="item.image" @click="goToList(item.id)"></Card>
            </div>
          </div>
        </div>
    </HomeLayout>
</template>