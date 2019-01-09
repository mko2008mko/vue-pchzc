<template>
  <li
    v-if="data.isDrive"
    class="drive-wrper"
    @mouseenter="$emit('mouseenter',index)"
    :style="styleObj"
  >
    <div class="fs-img">
      <a
        href="//www.huizuche.com/promotion/CDL"
        patrack="?tabsel=2"
        target="_blank"
      >
        <img
          :src="data.imgUrl"
          alt="惠租车,驾照全球通"
          title="惠租车,驾照全球通"
          width="282"
          height="212"
          style="background-color: rgb(255, 255, 255); background-image: url(&quot;&quot;); display: inline;"
        >
      </a>
    </div>
    <div class="fs-intro">
      <h6>{{data.title}}</h6>
      <div class="driving-service">
        <a
          href="//www.huizuche.com/promotion/CDL"
          patrack="?tabsel=2"
          target="_blank"
        >
          <div class="item">
            <h4>{{data.driveData[0].subTitle}}</h4>
            <span>{{data.driveData[0].subDesc}}</span>
          </div>
        </a>
        <a
          href="//www.huizuche.com/jiazhao/License"
          patrack="?tabsel=2"
          class="fs01"
          target="_blank"
        >
          <div class="item">
            <h4>{{data.driveData[1].subTitle}}</h4>
            <span>{{data.driveData[1].subDesc}}</span>
          </div>
        </a>
        <small>{{data.label}}</small>
      </div>
    </div>
  </li>
  <li
    v-else
    class="other-wraper"
    @mouseenter="$emit('mouseenter',index)"
    :style="styleObj"
  >

    <a
      href="//www.huizuche.com/VAP/CarGuide"
      patrack="?tabsel=3"
      target="_blank"
    >
      <div class="fs-img"><img
          :src="data.imgUrl"
          alt="惠租车,华人取车向导"
          title="惠租车,华人取车向导"
          width="282"
          height="212"
          data-original="/Content/Images/index/indexnew/fsImg-02.png"
          style="background-color: rgb(255, 255, 255); background-image: url(&quot;&quot;); display: inline;"
        ></div>
      <div class="fs-intro">
        <h6 :class="{currentcolor:!isSelect}">{{data.title}}</h6>
        <p :class="{currentcolor:!isSelect}">{{data.desc}}</p>
      </div>
    </a>

  </li>
</template>

<script>
export default {
  name: "FeatureServiceItem",
  props: {
    data: Object,
    index: Number,
    styleObj: Object
  },
  data() {
    return {
      isHover: false
    };
  },
  computed: {
    isSelect() {
      //   console.log(this.styleObj);
      return this.styleObj == null;
    }
  }
};
</script>

<style lang="less" scoped>
// li:hover {
//   transform: scale(1.03);
//   transition: all 200ms ease-in-out;
// }

.currentcolor {
  color: #00b79b !important;
}

.other-wraper {
  height: 340px;
  position: relative;
  .fs-img {
    width: 282px;
    height: 212px;
    z-index: 2;
    position: relative;

    img {
      width: 100%;
      height: 212px;
    }
  }

  .fs-intro {
    width: 100%;
    height: 300px;
    border: 1px solid #d9e0e4;
    border-radius: 4px;
    text-align: center;
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 0;
    box-sizing: border-box;

    h6 {
      padding-top: 186px;
      font-size: 20px;
      color: #2e3e4c;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      color: #586f81;
      margin-top: 20px;
    }
  }
}
.drive-wrper {
  height: 340px;
  position: relative;

  .fs-img {
    width: 282px;
    height: 212px;
    z-index: 2;
    position: relative;

    img {
      width: 100%;
      height: 212px;
    }
  }

  .fs-intro {
    width: 100%;
    height: 300px;
    border: 1px solid #d9e0e4;
    border-radius: 4px;
    text-align: center;
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 0;
    box-sizing: border-box;

    h6 {
      padding-top: 186px;
      font-size: 20px;
      color: #2e3e4c;
      font-weight: bold;
    }

    .driving-service {
      margin-top: 20px;
      position: relative;

      small {
        position: absolute;
        font-size: 10px;
        border: 1px solid #f58948;
        color: #f58948;
        text-align: center;
        border-radius: 2px;
        padding: 0 4px;
        top: -16px;
        left: 20px;
        height: 16px;
      }

      a {
        &:first-child {
          margin-right: 30px;
          position: relative;
          float: left;
          // display: inline-block;
          margin-left: 8px;
        }
        &:last-child {
          float: left;
          // display: inline-block;
          margin-left: 8px;
        }

        &:first-child::after {
          content: "";
          width: 1px;
          height: 30px;
          position: absolute;
          background-color: #9fb0bf;
          top: 5px;
          right: -22px;
        }

        .item {
          h4 {
            font-size: 16px;
            line-height: 24px;
            font-weight: bold;
            margin-bottom: 6px;
          }
          span {
            font-size: 12px;
            color: #586f81;
          }

          &:hover {
            h4 {
              color: #00b79b;
            }
            span {
              color: #00b79b;
            }
          }
        }
      }
    }
  }
}
</style>

