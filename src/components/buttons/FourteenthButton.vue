<script setup lang="ts">
    defineProps({
        title: String
    });
</script>

<template>
    <a href="">
        {{ title }}
        <div class="wave"></div>
    </a>
</template>

<style scoped>
    a {
  text-decoration: none;
  padding: 15px 30px;
  color: #00aeff;
  font-size: 18px;
  letter-spacing: 3px;
  border: 2px solid #00aeff;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
}

a:hover {
  color: white;
}

.wave {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: calc(100% + 22px);
  background-color: #00aeff;
  transition: all 1s;
  z-index: -1;
}

a:hover .wave {
  top: 0;
}

.wave:before {
  content: "";
  position: absolute;
  top: -22px;
  left: 0;
  width: 100%;
  height: 22px;
  background: url('/src/assets/wave.png');
  animation: wavy 0.5s linear infinite;
}

@keyframes wavy {
  0% { background-position-x: 0 }
  100% { background-position-x: 118px; }
}
</style>