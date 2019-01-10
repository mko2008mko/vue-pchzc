<template>
  <div>
    <HomeHeader />
    <router-view />
  </div>
</template>

<script>
import HomeHeader from "@/components/home-header/HomeHeader.vue";

export default {
  name: "Container",
  components: { HomeHeader }
};
</script>

<style>
</style>
