<script setup>
    import { ref, onMounted } from 'vue';
    import { getAccessToken, getArtist } from '../services/SpotifyService';
    import MainLayout from '../components/layouts/MainLayout.vue';
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
    <MainLayout show-header return>
      <template v-if="artistData">
        <div class="grid sm:grid-cols-2 gap-4">
          <img class="border-2 border-stone-950" :src="artistData.images[0].url" :alt="artistData.name" />
          <div class="flex flex-col gap-4">
            <div class="flex flex-wrap gap-2">
              <div v-for="genre, index in artistData.genres" :key="index" class="p-2 bg-stone-950 text-white text-sm">{{ genre }}</div>
            </div>
            <p>Followers: {{ artistData.followers.total }}</p>
          </div>
        </div>
      </template>
    </MainLayout>
  </template>
