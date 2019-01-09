<template>
  <section class="feature-service">
    <div class="fs-wrap">
      <h3>国人特色服务</h3>
      <ul class="fs-list">
        <FeatureServiceItem
          v-for="(item,index) in data"
          :key="item.id"
          :data="item"
          :index="index"
          @mouseenter="handelMouseenter"
          :styleObj="selected===index?current:null"
        />
      </ul>
      <div class="fs-info-img">
        <a
          v-for="(item,index) in data"
          :key="item.id"
          href="//www.huizuche.com/promotion/CDL"
          patrack="?tabsel=3"
          :style="selected===index?{opacity:1,zIndex:2}:{}"
          target="_blank"
        >
          <img
            width="1200"
            height="317"
            :src="item.adImgUrl"
            alt="惠租车,驾照全球通"
            title="惠租车,驾照全球通"
            style="background-color: rgb(255, 255, 255); background-image: url(&quot;&quot;); display: inline;"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import FeatureServiceItem from "./components/FeatureServiceItem";

export default {
  name: "HomeFeatureService",
  components: {
    FeatureServiceItem
  },
  props: {
    data: Array
  },
  data() {
    return {
      selected: 0,
      current: {
        transform: "scale(1.03)",
        transition: "all 200ms ease-in-out"
      }
    };
  },
  methods: {
    handelMouseenter(index) {
      this.selected = index;
      //   if (index !== 0) {
      //     this.current.color = "#00b79b!important";
      //   } else {
      //     this.current = {
      //       transform: "scale(1.03)",
      //       transition: "all 200ms ease-in-out"
      //     };
      //   }
    }
  }
};
</script>

<style lang="less" scoped>
// .current {
//   transform: scale(1.03);
//   transition: all 200ms ease-in-out;
// }

.current {
  display: block;
}
.feature-service {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;

  .fs-wrap {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;

    h3 {
      color: #25313b;
      padding-top: 52px;
      font-size: 28px;
    }

    .fs-list {
      width: 100%;
      margin-top: 17px;
      display: flex;
      justify-content: space-between;
    }

    .fs-info-img {
      width: 100%;
      height: 317px;
      margin-top: 24px;
      position: relative;

      a {
        // display: none;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        transition: 0.5s ease-in-out;
      }
    }
  }
}
</style>

