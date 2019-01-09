<template>
  <div class="home">
    <HomeHeader />
    <HomeFixFooter />
    <HomeCarousel
      :data="carouselData"
      @carsouleClick="handleCarsouleClick"
    />
    <HomeCoupon />
    <HomeCarType :data="RecommendcarType" />
    <HomeFeatureService :data="fsList" />
    <HomeVendorWall :data="vendorList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home-header/HomeHeader.vue";
import HomeFixFooter from "../components/home-fix-footer/HomeFixFooter";
import HomeCarousel from "../components/home-carousel/HoemCarousel";
import HomeCoupon from "../components/home-coupon/HomeCoupon";
import HomeCarType from "../components/home-car-type/HomeCarType";
import HomeFeatureService from "../components/home-feature-service/HomeFeatureService";
import HomeVendorWall from "../components/home-vendor-wall/HomeVendorWall";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeFixFooter,
    HomeCarousel,
    HomeCoupon,
    HomeCarType,
    HomeFeatureService,
    HomeVendorWall
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
      ],
      fsList: [
        {
          id: 1,
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/idl/idl-small-yl3.png",
          adImgUrl:
            "https://cdn-aliyun-pccss.huizuche.com/Content/Images/index/indexnew/idl-big.png",
          title: "驾照服务",
          desc: "",
          isDrive: true,
          label: "银联支付一元包邮",
          driveData: [
            {
              subTitle: "驾照全球通",
              subDesc: "国际驾照翻译认证件"
            },
            {
              subTitle: "驾照翻译件",
              subDesc: "多种免费认证翻译服务"
            }
          ]
        },
        {
          id: 2,
          imgUrl:
            "https://www.huizuche.com/Content/Images/index/indexnew/fsImg-02.png",
          adImgUrl:
            "https://www.huizuche.com/Content/Images/index/indexnew/fsInfoImg-02.png",
          title: "华人取车向导",
          desc: "一站式取车服务",
          isDrive: false
        },
        {
          id: 3,
          imgUrl:
            "https://www.huizuche.com/Content/Images/index/indexnew/fsImg-03.png",
          adImgUrl:
            "https://www.huizuche.com/Content/Images/index/indexnew/fsInfoImg-03.png",
          title: "贴心租",
          desc: "当地中文租车",
          isDrive: false
        },
        {
          id: 4,
          imgUrl:
            "https://www.huizuche.com/Content/Images/index/indexnew/fsImg-04.png",
          adImgUrl:
            "https://www.huizuche.com/Content/Images/index/indexnew/fsInfoImg-04-new.png",
          title: "国人定制保险",
          desc: "1对1专人理赔",
          isDrive: false
        }
      ],
      vendorList: [
        {
          id: 1,
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/hertz2.png",
          hoverImgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/hertz2_hover.png"
        },
        {
          id: 2,
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/avis.png",
          hoverImgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/avis_hover.png"
        },
        {
          id: 3,
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/alamo.png",
          hoverImgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/alamo_hover.png"
        },
        {
          id: 4,
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/sixt.png",
          hoverImgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/sixt_hover.png"
        },
        {
          id: 5,
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/enterprise2.png",
          hoverImgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/enterprise2_hover.png"
        },
        {
          id: 6,
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/europcar.png",
          hoverImgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/europcar_hover.png"
        },
        {
          id: 7,
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/budget.png",
          hoverImgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/budget_hover.png"
        },
        {
          id: 8,
          imgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/thrifty.png",
          hoverImgUrl:
            "https://cdn-aliyun-hzccontent.huizuche.com/huizuche/1.44/thrifty_hover.png"
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

