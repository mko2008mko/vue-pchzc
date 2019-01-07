<template>
  <div class="home">
    <HomeHeader />
    <HomeFixFooter />
    <HomeCarousel
      :data="carouselData"
      @carsouleClick="handleCarsouleClick"
    />
    <HomeCoupon />
    <HomeCarType :data="RecommendcarType"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home-header/HomeHeader.vue";
import HomeFixFooter from "../components/home-fix-footer/HomeFixFooter";
import HomeCarousel from "../components/home-carousel/HoemCarousel";
import HomeCoupon from "../components/home-coupon/HomeCoupon";
import HomeCarType from "../components/home-car-type/HomeCarType";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeFixFooter,
    HomeCarousel,
    HomeCoupon,
    HomeCarType
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
      ],
      RecommendcarType: [
        {
          id: 1,
          imgUrl:
            "https://cdn-aliyun-carimg.huizuche.com//car/TOYOTA_RAV4_L.JPG",
          carName: "丰田 RAV4",
          carLabel: ["后备箱大", "动力十足"],
          carCity: "洛杉矶",
          carPrice: 230
        },
        {
          id: 2,
          imgUrl: "https://cdn-aliyun-carimg.huizuche.com//car/LDV_G10_L.JPG",
          carName: "大通 G1",
          carLabel: [],
          carCity: "洛杉矶",
          carPrice: 321
        },
        {
          id: 3,
          imgUrl:
            "https://cdn-aliyun-carimg.huizuche.com//car/MITSUBISHI_MIRAGE_L.JPG",
          carName: "三菱 Mirage",
          carLabel: [],
          carCity: "洛杉矶",
          carPrice: 131
        },
        {
          id: 4,
          imgUrl:
            "https://cdn-aliyun-carimg.huizuche.com//car/HYUNDAI_SONATA_L.JPG",
          carName: "现代 Sonata",
          carLabel: ["代步首选", "纵情驾驭"],
          carCity: "旧金山",
          carPrice: 210
        },
        {
          id: 5,
          imgUrl:
            "https://cdn-aliyun-carimg.huizuche.com//car/TOYOTA_CAMRY_L.JPG",
          carName: "丰田 Camry",
          carLabel: [],
          carCity: "温哥华",
          carPrice: 227
        },
        {
          id: 6,
          imgUrl:
            "https://cdn-aliyun-carimg.huizuche.com//car/NISSAN_QASHQAI_L.JPG",
          carName: "日产 Qashqai",
          carLabel: [],
          carCity: "墨尔本",
          carPrice: 230
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
<style lang="less" scoped>
.home {
  padding-bottom: 120px;
}
</style>

