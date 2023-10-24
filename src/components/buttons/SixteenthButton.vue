<script setup lang="ts">
    defineProps({
        title: String
    });
</script>

<template>
    <a href="#">
        {{ title }}
    </a>
</template>

<style scoped>
    a {
  text-decoration: none;
  padding: 15px 30px;
  background-color: #2c6565;
  color: white;
  font-size: 18px;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
  border-radius: 100px;
}

a:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
  z-index: -1;
  border-radius: 100px;
  transition: all 0.5s;
}

a:hover:before {
  transform: scaleX(1.3) scaleY(1.5);
  opacity: 0;
}

a:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

a:active {
  transform: translateY(0);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
</style>