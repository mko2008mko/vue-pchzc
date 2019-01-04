<template>
  <div>
    <section
      @click="handleAdSHow"
      class="advert_mini"
      :class="{advert_mini_xianshi:!adIsShow}"
      :style="style1"
    >
      <img
        src="https://cdn-qiniu-activity1.huizuche.com/PCIDLxiaotu.png"
        alt="暑期海外出行全场62折"
      >
    </section>
    <section
      class="advert_bottom"
      :class="{advert_bottom_hide:!adIsShow}"
      :style="style2"
    >
      <div class="da_cont">
        <div style="background-image:url('https://cdn-aliyun-hzccontent.huizuche.com/IDLtonglan1.12.jpg');background-position:center;height: 120px;">
          <div class="fiex_box">
            <a
              href="http://www.huizuche.com/promotion/CDL?tabsel=3?keywords=1yw_2lunbo_3cdl_4_5pc"
              target="_blank"
            > </a>
            <i
              @click="handleAdHide"
              class="ad_hide"
              style="left: 1200px;"
            ></i>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adIsShow: true,
      style1: { transitionDelay: "500ms" },
      style2: { transitionDelay: "0ms" }
    };
  },
  methods: {
    handleAdHide() {
      this.adIsShow = false;
      this.style1 = {
        transitionDelay: "500ms"
      };
      this.style2 = {
        transitionDelay: "0ms"
      };
    },
    handleAdSHow() {
      this.adIsShow = true;
      this.style1 = {
        transitionDelay: "0ms"
      };
      this.style2 = {
        transitionDelay: "500ms"
      };
    }
  }
};
</script>

<style lang="less" scoped>
.advert_mini {
  position: fixed;
  left: -290px;
  bottom: 0;
  z-index: 1000;
  display: block;
  cursor: pointer;
  transition: all 500ms ease-in-out;
}

.advert_mini_xianshi {
  left: 0;
}
.advert_bottom {
  width: 100%;
  height: 120px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: block;
  background: url(https://cdn-aliyun-pccss.huizuche.com/Content/Images/background-transparent.png)
    no-repeat center center;
  transition: all 500ms ease-in-out;

  .fiex_box {
    width: 1200px;
    height: 120px;
    margin: auto;
    position: relative;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    .ad_hide {
      width: 38px;
      height: 38px;
      position: absolute;
      top: 5px;
      left: 1200px;
      cursor: pointer;
      background: url(https://cdn-aliyun-pccss.huizuche.com/Content/Images/promotion/nationalday_1/nationalday_adve_off.png)
        no-repeat;
    }
  }
}

.advert_bottom_hide {
  //   width: 0px;
  left: -100%;
}
</style>

