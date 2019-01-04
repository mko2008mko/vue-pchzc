<template>
  <header>
    <div class="sh-wrap">
      <HeaderLogo />
      <HeaderNav />
      <HeaderUserInfo />
      <HeaderServicePhone />
      <HeaderDownloadApp />
    </div>
  </header>
</template>

<script>
import HeaderLogo from "./components/header-logo";
import HeaderNav from "./components/header-nav";
import HeaderUserInfo from "./components/header-userinfo";
import HeaderServicePhone from "./components/header-service-phone";
import HeaderDownloadApp from "./components/header-download-app";

export default {
  name: "HomeHeader",
  components: {
    HeaderLogo,
    HeaderNav,
    HeaderUserInfo,
    HeaderServicePhone,
    HeaderDownloadApp
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
header {
  width: 100%;
  min-width: 1200px;
  height: 90px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);
  position: relative;
  z-index: 10;

  .sh-wrap {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    vertical-align: text-bottom;
    justify-content: space-between
  }
}
</style>
