<template>
  <div class="service-phone">
    <i class="new-index-icon lt-line"></i>
    <i class="new-index-icon rt-line"></i>
    <div class="sp-cont">
      <span>7*24h</span>
      <i class="new-index-icon phone"></i>
    </div>
    <div class="sp-combobox">
      <i class="combobox-line"></i>
      <div class="phone-list">
        <p>中国大陆 4001-888-820</p>
        <p>海外 +86-21-61514888</p>
      </div>
      <div class="code-list">
        <span>
          <i>专属VIP租车顾问</i>
          <b>更多额外优惠</b>
          <b>尽在微信公众号</b>
          <img src="https://www.huizuche.com/Content/Images/suspend/P-wechat.png?v=201701026">
        </span>
      </div>
      <div class="service-inline">
        <span class="new-index-icon si-btn">在线客服</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.service-phone {
  height: 79px;
  margin-top: 11px;
  padding-top: 2px;
  position: relative;
  width: 110px;
  text-align: center;
  //   margin-left: 30px;

  .sp-cont {
    width: 100%;
    margin-top: 35px;

    span {
      font-size: 16px;
      font-weight: bold;
      color: #ffa23e;
      display: inline-block;
      line-height: 19px;
    }

    .phone {
      width: 19px;
      height: 19px;
      background-position: -302px 0;
      vertical-align: top;
    }
  }

  .sp-combobox {
    position: absolute;
    right: -18px;
    top: 98%;
    width: 210px;
    background-color: #fff;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.16);
    padding: 12px 16px 20px;
    display: none;

    .combobox-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 1px;
      background-color: #e2e8ec;
    }

    .pohne-list {
      width: 178px;
      text-align: left;
      border-bottom: 1px solid #e2e8ec;
      padding-bottom: 15px;

      p {
        font-size: 16px;
        color: #2e3e4c;
      }
    }
    .code-list {
      width: 178px;
      padding-left: 4px;
      margin-top: 16px;

      span {
        width: 76px;
        text-align: center;
        i {
          font-style: normal;
          font-size: 16px;
          color: #131c28;
          font-weight: bold;
        }
        b {
          font-size: 14px;
          color: #2e3e4c;
          display: block;
        }
        img {
          width: 100px;
          height: 100px;
        }
      }
    }

    .service-inline {
      margin-top: 24px;
      text-align: center;

      span {
        color: #fff;
        font-size: 16px;
        line-height: 36px;
        cursor: pointer;
        width: 168px;
        height: 36px;
        background-position: 0 -290px;
        vertical-align: top;
      }
    }
  }

  .line() {
    width: 1px;
    height: 79px;
    background-position: -399px 0;
    position: absolute;
    top: 0;
    display: none;
  }

  .lt-line {
    // &:extend(.line);
    .line();
    // width: 1px;
    // height: 79px;
    // background-position: -399px 0;
    // position: absolute;
    // left: -16px;
    // top: 0;
    left: -23px;
  }

  .rt-line {
    .line();
    right: -23px;
  }

  &:hover {
    .sp-combobox {
      display: block;
    }
  }
}
</style>

