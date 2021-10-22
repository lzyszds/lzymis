<script setup>
import Navleft from './components/Navleft.vue';
import Navtop from './components/Navtop.vue';
</script>

<template >
  <div class="container w-8/12 h-screen relative bg-red-400 m-auto">

    <Navleft></Navleft>
    <Navtop></Navtop>
    <router-view/>
  </div>
</template>

<style>
</style>
