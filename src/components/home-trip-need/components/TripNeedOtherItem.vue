<template>
  <li v-if="data">
    <a
      href="/Mall/Shop/Goodsdetail?spgd=26&amp;tabsel=4"
      target="_blank"
    >
      <div class="tn-other-img">
        <img
          width="137"
          height="137"
          :src="data.imgUrl"
          title="惠租车,美国电话卡"
          alt="惠租车,美国电话卡"
        >
      </div>
      <div class="tn-other-cont">
        <h5>{{data.title}}</h5>
        <p>{{data.desc}}</p>
        <span>
          <i>￥</i>
          <em>{{data.price}}</em>
          <small>起</small>
        </span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "TripNeedOtherItem",
  props: {
    data: Object
  }
};
</script>

<style lang="less" scoped>
a {
  display: flex;
  .tn-other-img {
    width: 137px;
    height: 137px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .tn-other-cont {
    width: 135px;
    height: 137px;
    margin-left: 10px;
    position: relative;

    h5 {
      font-size: 16px;
      color: #2e3e4c;
      font-weight: bold;
      margin-top: 10px;
    }

    p {
      font-size: 14px;
      color: #586f81;
      margin-top: 7px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;

      i {
        font-size: 20px;
        color: #f58948;
        font-style: normal;
      }

      em {
        font-size: 28px;
        color: #f58948;
        font-weight: bold;
      }

      small {
        font-size: 14px;
        color: #586f81;
        position: relative;
        left: 7px;
      }
    }
  }
}
</style>

