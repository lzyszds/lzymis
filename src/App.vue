<script setup>
import Navleft from './components/Navleft.vue';
import Navtop from './components/Navtop.vue';
import Content from './components/Content.vue';
</script>

<template >
  <div class="container w-8/12 h-screen relative bg-gray-200 m-auto shadow-xl">
    <Content></Content>
    <Navleft></Navleft>
    <Navtop></Navtop>
  </div>
</template>

<style>
</style>
