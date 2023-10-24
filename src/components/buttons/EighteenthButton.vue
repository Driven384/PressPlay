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
  color: #2c6565;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  font-size: 18px;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
}

a:before {
  content: "";
  position: absolute;
  left: -20px;
  top: 0;
  width: 20px;
  height: 80px;
  background-color: white;
  z-index: -1;
  transition: all 0.5s;
  transform: rotate(-25deg);
}

a:hover:before {
  transform: translate(260px);
  opacity: 0;
}

a:active {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>