<script setup lang="ts">
    defineProps({
        title: String
    });
</script>

<template>
    <a href="">
        {{ title }}
    </a>
</template>

<style scoped>
a {
  text-decoration: none;
  padding: 15px 30px;
  color: white;
  font-size: 16px;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
  width: 260px;
  height: 60px;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  transition: all 0.5s;
}

a:before {
  content: "";
  position: absolute;
  top: -6px;
  left: 0;
  width: 133px;
  height: 100%;
  background: #CD605F;
  z-index: -1;
  transition: all 0.5s;
  transform: skewX(-25deg);
}

a:after {
  content: "";
  position: absolute;
  top: 6px;
  right: 0;
  width: 133px;
  height: 100%;
  background: #2c6565;
  z-index: -1;
  transition: all 0.5s;
  transform: skewX(-25deg);
}

a:hover:before, a:hover:after {
  transform: skewX(0);
  top: 0;
}
</style>