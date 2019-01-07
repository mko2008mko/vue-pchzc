<template>
  <section class="carousel-banner">
    <div class="cb-nav">
      <ul
        id="cbNavUl"
        style="display: inline-block;"
      >
        <li
          v-for="(item,index) in data"
          :key="item.imgUrl"
          :class="{currentdot:currentIndex===index}"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
        >{{item.title}}</li>
        <!-- <li class="">年终狂欢四重礼</li>
        <li class="">北美85折</li>
        <li class="">自驾省钱攻略</li>
        <li class="current">每周特惠租车</li> -->

      </ul>
    </div>
    <a
      v-for="(item,index) in data"
      :key="item.imgUrl"
      :href="item.linkUrl"
      target="_blank"
      title="惠租车,惠租车活动,机票酒店尽情领"
      :class="{current:currentIndex===index}"
      @click="$emit('carsouleClick',item,index)"
    >
      <div
        class="cb-img"
        :style="item.styleObj"
      ></div>
    </a>

  </section>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  created() {
    this.data.map(item => {
      return (item.styleObj = {
        backgroundImage: `url(${item.imgUrl})`,
        backgroundrepeat: "no-repeat"
      });
    });
  },
  methods: {
    handleMouseEnter(index) {
      this.currentIndex = index;
      this.clearCarouse();
    },
    handleMouseLeave() {
      this.startCarousel();
    },
    startCarousel() {
      this.clearCarouse();
      this.timerID = setInterval(() => {
        if (this.currentIndex >= 4) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
      }, 3000);
    },
    clearCarouse() {
      if (this.timerID) {
        clearInterval(this.timerID);
      }
    }
  },
  //   computed: {
  //     getCurrentIndex() {}
  //   },
  mounted() {
    this.startCarousel();
  },
  destroyed() {
    this.clearCarouse();
  }
};
</script>

<style lang="less" scoped>
.carousel-banner {
  width: 100%;
  min-width: 1200px;
  height: 500px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: #f2f5f8;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: 1s ease-in-out;

    div {
      width: 100%;
      height: 100%;
      background-position: top center;
    }
  }
  .current {
    opacity: 1;
    z-index: 2;
  }

  .cb-nav {
    position: absolute;
    bottom: 40px;
    left: 600px;
    z-index: 999;

    li {
      width: 108px;
      height: 24px;
      float: left;
      text-align: center;
      // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMV…AAAXRSTlMAQObYZgAAABJJREFUeF4FwIEIAAAAAKD9qY8AAgABdDtSRwAAAABJRU5ErkJggg==) no-repeat center center;
      background-color: rgba(46, 62, 76, 0.7);
      color: #fff;
      font-size: 12px;
      border-radius: 2px;
      line-height: 24px;
      margin-left: 4px;
      cursor: pointer;
    }

    .currentdot {
      background: url("https://cdn-aliyun-pccss.huizuche.com/Content/Images/index/indexnew/new-index.png")
        no-repeat;
      background-position: -198px -150px;
    }
  }
}
</style>

