<template>
  <div class="home">
    <HomeHeader />
    <HomeFixFooter />
    <HomeCarousel
      :data="carouselData"
      @carsouleClick="handleCarsouleClick"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home-header/HomeHeader.vue";
import HomeFixFooter from "../components/home-fix-footer/HomeFixFooter";
import HomeCarousel from "../components/home-carousel/HoemCarousel";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeFixFooter,
    HomeCarousel
  },
  data() {
    return {
      carouselData: [
        {
          title: "机票酒店尽情领",
          imgUrl: "https://cdn-aliyun-hzccontent.huizuche.com/car3/pclunbo.jpg",
          linkUrl: "https://www.baidu.com/"
        },
        {
          title: "年终狂欢四重礼",
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/PC%20nzda12.18.jpg",
          linkUrl: "https://www.baidu.com/"
        },
        {
          title: "北美85折",
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/AVIS&Budget12.13PC.jpg",
          linkUrl: "https://www.baidu.com/"
        },
        {
          title: "自驾省钱攻略",
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/sibuzhou/banner-181229.jpg",
          linkUrl: "https://www.baidu.com/"
        },
        {
          title: "每周特惠租车",
          imgUrl: "https://cdn-qiniu-activity1.huizuche.com/PClbweek.jpg",
          linkUrl: "https://www.baidu.com/"
        }
      ]
    };
  },
  methods: {
    handleCarsouleClick(item, index) {
      console.log(item, index);
    }
  }
};
</script>
