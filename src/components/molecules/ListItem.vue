<script setup>
import { convertDuration } from '../../helpers/duration';
import { useRouter } from 'vue-router';
import MainButton from '../buttons/MainButton.vue';

defineProps({
    song: {
        type: Object,
        default() {
            return {
                name: 'This a Rockstar song',
                artists: [],
                duration_ms: 0
            }
        }
    },
    artistPage: {
        type: Boolean,
        default: false
    }
});

const router = useRouter();

const goToArtist = (id) => {
    router.push({ name: 'artist', params: { id: id } });
};

const playItem = () => {
    console.log('play item');
    // play song
    // add song to queue
}

</script>

<template>
    <div class="flex my-2 mb-4 mt-0 pr-2 lg:pr-4 bg-gradient text-stone-950 border-2 border-stone-950">
        <div class="relative lg:mr-20">
            <div class="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] object-cover mix-blend-color-burn opacity-60">
                <img class="w-inherit" :src="song.album.images[0].url" alt="album cover" />
            </div>
            <button class="absolute h-20 lg:h-32 w-20 lg:w-32 top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-950 hover:drop-shadow-xl" @click="playItem">
                <img class="rounded-full" src="@/assets/play icon.svg"/>
            </button>
        </div>

        <div class="lg:mr-4 w-[180px] lg:w-[500px] m-6 mr-0 text-sm lg:text-base">
            <h5 class="font-bold lg:text-lg">{{ song.name }}</h5>
            <p v-for="artist in song.artists" :key="artist.id">By {{ artist.name }}</p>
            <p >duration: {{ convertDuration(song.duration_ms) }}</p>
            <p class="truncate lg:whitespace-normal" :title="song.album.name">{{ song.album.name }}</p>
            <p>{{ song.album.release_date }}</p>
        </div>

        <div class="invisible sm:visible ml-2 mb-2 lg:mb-4 text-sm lg:text-base flex-grow flex justify-end items-end">
            <MainButton title="More about the artist" @click="goToArtist(song.artists[0].id)"></MainButton>
        </div>
    </div>
</template>
    