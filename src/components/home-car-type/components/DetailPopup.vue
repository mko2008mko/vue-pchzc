<template>
  <div class="detail-popup">
    <a :href="linkUrl">查看详情</a>
  </div>
</template>

<script>
export default {
  name: "DetailPopup",
  props: {
    linkUrl: String
  }
};
</script>

<style lang="less" scoped>
.detail-popup {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  // opacity: 0;
  // transition: opacity .2s ease-in-out;

  a {
    display: block;
    width: 118px;
    height: 39px;
    line-height: 39px;
    font-size: 18px;
    color: #fff !important;
    text-align: center;
    background: #0fbc8b;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -59px;
  }
}
</style>

