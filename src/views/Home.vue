<template>
  <div
    class="home"
    v-if="homeData"
  >
    <!-- <HomeHeader /> -->
    <HomeFixFooter />
    <HomeCarousel
      :data="homeData.carouselData"
      @carsouleClick="handleCarsouleClick"
    />
    <HomeCoupon />
    <HomeCarType :data="homeData.RecommendcarType" />
    <HomeFeatureService :data="homeData.fsList" />
    <HomeVendorWall :data="homeData.vendorList" />
    <HomeUserShare :data="homeData.userShareList" />
    <HomeTripNeed :data="homeData.tripNeedList" />
    <HomeSuspend />
  </div>
  <ContentLoader
    v-else
  >
   <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
  <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
  <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
  <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
  </ContentLoader>

</template>

<script>
// @ is an alias to /src
// import HomeHeader from "@/components/home-header/HomeHeader.vue";
import HomeFixFooter from "../components/home-fix-footer/HomeFixFooter";
import HomeCarousel from "../components/home-carousel/HoemCarousel";
import HomeCoupon from "../components/home-coupon/HomeCoupon";
import HomeCarType from "../components/home-car-type/HomeCarType";
import HomeFeatureService from "../components/home-feature-service/HomeFeatureService";
import HomeVendorWall from "../components/home-vendor-wall/HomeVendorWall";
import HomeUserShare from "../components/home-user-share/HomeUserShare";
import HomeSuspend from "../components/home-suspend/HomeSuspend";
import HomeTripNeed from "../components/home-trip-need/HomeTripNeed";
import { ContentLoader } from "vue-content-loader";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    // HomeHeader,
    HomeFixFooter,
    HomeCarousel,
    HomeCoupon,
    HomeCarType,
    HomeFeatureService,
    HomeVendorWall,
    HomeUserShare,
    HomeSuspend,
    HomeTripNeed,
    ContentLoader
  },

  computed: mapState({
    homeData: state => state.home.homeData
  }),
  methods: {
    handleCarsouleClick(item, index) {
      console.log(item, index);
    },
    ...mapActions("home", ["getHomeData"])
  },
  created() {
    this.getHomeData();
    // this.$store.dispatch("homes/getHomeData");
  }
};
</script>
<style lang="less" scoped>
.home {
  padding-bottom: 120px;
}
</style>

