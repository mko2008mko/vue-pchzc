<template>
  <div
    v-if="data"
    class="tn-hot"
  >
    <a
      href="/Mall/Shop/Goodsdetail?spgd=24&amp;tabsel=4"
      target="_blank"
    >
      <img
        width="282"
        height="300"
        :src="data.imgUrl"
        title="惠租车,安联境外旅游险"
        alt="惠租车,安联境外旅游险"
      >
      <div class="tn-hot-cont">
        <p>{{data.title}}</p>
        <span>
          <i>￥</i>
          <em>{{data.price}}</em>
          <small>起</small>
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "TripNeedHot",
  props: {
    data: Object
  }
};
</script>

<style lang="less" scoped>
.tn-hot {
  width: 282px;
  height: 300px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  .tn-hot-cont {
    position: absolute;
    width: 100%;
    height: 130px;
    left: 0;
    bottom: 0;
    background-image: url(https://cdn-aliyun-pccss.huizuche.com/Content/Images/index/indexnew/opacity-bg.png);
    background-repeat: repeat-x;
    padding: 56px 0 0 20px;
    box-sizing: border-box;

    p {
      font-size: 22px;
      color: #fff;
      font-weight: bold;
    }

    span {
      display: inline-block;
      vertical-align: baseline;
      position: relative;
      top: -5px;

      i {
        font-size: 24px;
        color: #f58948;
        font-style: normal;
      }

      em {
        font-size: 28px;
        color: #f58948;
      }

      small {
        font-size: 14px;
        color: #fff;
        position: relative;
        top: -1px;
        left: 7px;
      }
    }
  }
}
</style>

