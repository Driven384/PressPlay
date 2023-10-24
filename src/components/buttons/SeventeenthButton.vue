<script setup lang="ts">
    defineProps({
        title: String
    });
</script>

<template>
    <a href="">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        {{ title }}
    </a>
</template>

<style scoped>
    a {
  text-decoration: none;
  padding: 8px 16px 8px 16px;
  color: #2c6565;
  font-size: 16px;
  letter-spacing: 2px;
  border: 3px solid #2c6565;
  text-transform: uppercase;
  position: relative;
  width: 260px;
  height: 60px;
  line-height: 40px;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
}

span {
    position: absolute;
    background: #2c6565;
    box-shadow: 0 0 10px #2c6565, 0 0 20px #2c6565, 0 0 30px #2c6565, 0 0 50px #2c6565, 0 0 100px #2c6565;
}

span:nth-child(1) {
  position: absolute;
  top: calc(50% - 3px);
  left: -40px;
  width: 30px;
  height: 3px;
  transition: 0.5s ease-in-out;
  transform-origin: left;
}

a:hover span:nth-child(1) {
    left: 50%;
    transform: scaleX(0);
    transition-delay: 0s;
}

span:nth-child(2) {
  position: absolute;
  top: -40px;
  left: calc(50% - 3px);
  width: 3px;
  height: 30px;
  transition: 0.5s ease-in-out;
  transform-origin: top;
}

a:hover span:nth-child(2) {
    top: 50%;
    transform: scaleY(0);
    transition-delay: 0s;
}

span:nth-child(3) {
  position: absolute;
  top: calc(50% - 3px);
  right: -50px;
  height: 3px;
  width: 30px;
  transition: 0.5s ease-in-out;
  transform-origin: right;
}

a:hover span:nth-child(3) {
    right: 50%;
    transform: scaleX(0);
    transition-delay: 0s;
}

span:nth-child(4) {
  position: absolute;
  bottom: -50px;
  left: calc(50% - 3px);
  width: 3px;
  height: 30px;
  transition: 0.5s ease-in-out;
  transform-origin: bottom;
}

a:hover span:nth-child(4) {
    bottom: 50%;
    transform: scaleY(0);
    transition-delay: 0s;
}

a:hover {
    color: #fff;
    border: 3px solid transparent;
}

a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2c6565;
    transform: scale(0);
    transition: 0.5s;
    z-index: -1;
}

a:hover:before {
    transform: scale(1);
    transition-delay: 0.5s;
    box-shadow: 0 0 10px #2c6565, 0 0 30px #2c6565, 0 0 60px #2c6565;
}
</style>