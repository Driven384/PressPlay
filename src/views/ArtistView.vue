<script setup>
    import { ref, onMounted } from 'vue';
    import { getAccessToken, getArtist } from '../SpotifyService';
    import MainLayout from '../components/MainLayout.vue';
    import { useHeaderStore } from '../stores/store';
    import { useRoute } from 'vue-router';

    const artistData = ref(null);
    const headerStore = useHeaderStore();
    const route = useRoute();

    onMounted(() => {
      fetchArtist();
    });
  
    const fetchArtist = async () => {
      try {
        const accessToken = await getAccessToken();
        const playlist = await getArtist(accessToken, route.params.id);
        artistData.value = playlist;
        console.log(artistData.value);
        headerStore.setTitle(artistData.value.name);

      } catch (error) {
        // Handle errors
      }
    };
  </script>
  
  <template>
    <MainLayout show-header>
      <template v-if="artistData">
        <div class="flex flex-wrap gap-2">
            <div v-for="genre, index in artistData.genres" :key="index" class="p-2 bg-stone-950 text-white text-sm">{{ genre }}</div>
        </div>
        <p>followers: {{ artistData.followers.total }}</p>
        <img :src="artistData.images[0].url" :alt="artistData.name" />
      </template>
    </MainLayout>
  </template>
  