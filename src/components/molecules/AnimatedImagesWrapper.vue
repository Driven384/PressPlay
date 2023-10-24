<script setup lang="ts">

</script>

<template>
    <div class="flex flex-wrap gap-16">
      <div class="group/image1 relative image1 w-[300px] h-[300px]">
        <img class="relative w-full h-full object-cover brightness-100 group-hover/image1:brightness-50" src="/src/assets/header-image-square.jpeg" alt="" />
        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white invisible group-hover/image1:visible">
          <div class="bg-white p-4 w-full text-center">
            <h1 class="text-stone-950 text-2xl">tekst</h1>
          </div>
          <p class="text-xl">tekstie tekst</p>
        </div>
      </div>

      <div class="image2">
        <img src="/src/assets/header-image-square.jpeg" alt="" />
        <div class="textContainer">
          <div class="bg-white p-4 w-full text-center">
            <h1 class="text-stone-950 text-2xl">tekst</h1>
          </div>
          <p class="text-xl text-white">tekstie tekst</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.image2 {
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
}

.image2 img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(100%);
  transition: all 0.5s ease-in-out;
}

.image2 .textContainer {
  position: absolute;
  top: calc(50% - 50px);
  left: -100px;
  width: 100%;
  height: 100%;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transform: rotate(-90deg);
  transition: all 0.5s ease-in-out;
}

.image2:hover img {
  filter: brightness(50%);
  transform: scale(1.25) rotate(10deg);
}

.image2:hover .textContainer {
  visibility: visible;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
}
</style>