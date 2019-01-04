<template>
  <div class="home">
    <HomeHeader />
    <HomeFixFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home-header/HomeHeader.vue";
import HomeFixFooter from "../components/home-fix-footer/HomeFixFooter";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeFixFooter
  }
};
</script>
