<template>
  <div class="app-download">
    <i
      class="new-index-icon lt-line"
      style="display: none;"
    ></i>
    <span>APP</span>
    <div class="appd-combobox">
      <i class="combobox-line"></i>
      <img
        src="https://www.huizuche.com/QRCode/AppDownload"
        class="app-download-erweima"
      >
      <p>扫码下载APP</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.app-download {
  height: 79px;
  margin-top: 11px;
  margin-left: 5px;
  padding-top: 2px;
  position: relative;

  span {
    width: 44px;
    height: 26px;
    display: inline-block;
    line-height: 26px;
    font-size: 18px;
    color: #ffa23e;
    margin-top: 30px;
    font-weight: bold;
    border: 1px solid #ffa23e;
    border-radius: 4px;
    text-align: center;
  }

  .appd-combobox {
    position: absolute;
    right: 0;
    top: 98%;
    width: 142px;
    background-color: #fff;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.16);
    padding: 26px;
    text-align: center;
    display: none;

    .combobox-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 84px;
      height: 1px;
      background-color: #e2e8ec;
    }
      img {
        width: 90px;
        height: 90px;
      }

      p {
        font-size: 14px;
        color: #00b79b;
        margin-top: 10px;
      }
  }

  &:hover{
      .appd-combobox{
          display: block;
      }
  }
}
</style>

