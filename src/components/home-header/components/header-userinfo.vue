<template>
  <div class="user-info">
    <i class="new-index-icon lt-line"></i>
    <i class="new-index-icon rt-line"></i>
    <div class="no-login">
      <a
        href="/Account/regist?ReturnUrl=https://www.huizuche.com/"
        id="btnRegist"
        class="JsBtnRegist btn_regist"
      >注册</a>/<a
        id="btnLogin"
        class="JsLoginBtn btn_regist"
        href="/Account/login"
      >登录</a>
      <span class="gift-icon"><img src="https://www.huizuche.com/Content/Images/index/indexnew/gift.png"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderUserInfo"
};
</script>

<style lang="less" scoped>
.user-info {
  height: 79px;
  margin-top: 11px;
  padding-top: 2px;
  padding-left: 20px;
  position: relative;

  .no-login {
    margin-top: 32px;
    color: #ffa23e;
    font-weight: bold;
    font-size: 18px;

    a {
      font-size: 16px;
      display: inline-block;
      color: #ffa23e;
      font-weight: bold;
    }

    .gift-icon {
      position: absolute;
      top: 18px;
      right: -32px;
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
}
</style>

