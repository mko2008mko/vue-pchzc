<template>
  <div id="suspend">
    <div id="popup">
      <transition-group name="fade">
        <div
          :key=1
          v-if="spsSqIsHover"
          class="spsSq-popup"
          style="left: -198px;"
          @mouseenter="spsSqIsHover=true"
          @mouseleave="spsSqIsHover=false"
        >
          <p>解答您的租车疑问</p>
        </div>

        <div
          :key=2
          v-if="spsCallIsHover"
          class="spsCall-popup"
          style="left: -198px;"
          @mouseenter="spsCallIsHover=true"
          @mouseleave="spsCallIsHover=false"
        >
          <p>中国大陆 4001-888-820</p>
          <p>海外 +86-21-61514888</p>
        </div>
        <div
          :key=3
          v-if="spsCodeIsHover"
          class="spsCode-popup"
          style="left: -198px;"
          @mouseenter="spsCodeIsHover=true"
          @mouseleave="spsCodeIsHover=false"
        >
          <p>
            专属VIP租车顾问<br>
            <span>更多额外优惠</span>
            <span>尽在微信公众号</span>
          </p>
          <img src="https://www.huizuche.com/Content/Images/suspend/P-wechat.png?v=201701026">
        </div>
      </transition-group>
    </div>

    <div class="sps-wrap">
      <div
        id="spsSq"
        @mouseenter="spsSqIsHover=true"
        @mouseleave="spsSqIsHover=false"
      >
        <div class="sps-sq"></div>
        <p>在线</p>
        <p>咨询</p>
      </div>
      <div
        id="spsCall"
        @mouseenter="spsCallIsHover=true"
        @mouseleave="spsCallIsHover=false"
      >
        <div class="sps-call"></div>
        <p>电话</p>
        <p>咨询</p>
      </div>
      <div
        id="spsCode"
        @mouseenter="spsCodeIsHover=true"
        @mouseleave="spsCodeIsHover=false"
      >
        <div class="sps-code"></div>
        <p>微信</p>
        <p>咨询</p>
      </div>

      <!-- <div
        id="spsBack"
        style="display: none;"
      >
        <div
          class="sps-back"
          style="display: block;"
        ></div>
        <div
          class="sps-back-text"
          style="display: none;"
        >回到<br>顶部</div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSuspend",
  data() {
    return {
      spsSqIsHover: false,
      spsCallIsHover: false,
      spsCodeIsHover: false
    };
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translatex(198px);
}

#suspend {
  width: 56px;
  height: auto;
  position: fixed;
  bottom: 100px;
  right: 0;
  padding-bottom: 0;
  z-index: 10;

  #popup {
    position: relative;

    .spsSq-popup {
      width: 200px;
      height: 103px;
      top: 0;
      left: 100px;
      background-color: #fff;
      position: absolute;
      text-align: center;
      border: 1px solid #c4d1d8;
      border-radius: 4px;
      //   z-index: 15;
      p {
        font-size: 16px;
        color: #2e3e4c;
        line-height: 103px;
      }
    }

    .spsCall-popup {
      box-sizing: border-box;
      width: 200px;
      height: 100px;
      top: 102px;
      left: 100px;
      background-color: #fff;
      position: absolute;
      text-align: center;
      border: 1px solid #c4d1d8;
      border-radius: 4px;
      padding: 30px 10px;
      p {
        font-size: 14px;
        color: #2e3e4c;
        margin-bottom: 5px;
      }
    }

    .spsCode-popup {
      box-sizing: border-box;
      width: 200px;
      height: 180px;
      top: 201px;
      left: 100px;
      background-color: #fff;
      position: absolute;
      text-align: center;
      border: 1px solid #c4d1d8;
      border-radius: 4px;
      p {
        padding: 8px 0 2px 0;
        font-size: 16px;
        line-height: 20px;
        color: #131c28;
        font-weight: bold;
      }

      span {
        font-size: 14px;
        color: #2e3e4c;
        display: inherit;
      }

      img {
        width: 92px;
        height: 92px;
      }
    }
  }

  .sps-wrap {
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 11;
    position: relative;
    border: 1px solid #c4d1d8;
    box-sizing: border-box;

    #spsSq {
      box-sizing: border-box;
      padding: 13px 10px;
      width: 34px;
    //   margin-bottom: 13px;
    //   padding-top: 13px;
      position: relative;
      cursor: point;

      .sps-sq {
        background: url(https://cdn-aliyun-pccss.huizuche.com/Content/Images/index/indexnew/servise02.png);
        height: 35px;
        width: 27px;
        margin-bottom: 6px;
        margin-left: 5px;
      }

      p {
        width: 36px;
        text-align: center;
        color: #768fa4;
        line-height: 17px;
      }
    }

    #spsCall {
      box-sizing: border-box;
      padding: 13px 10px;
      width: 34px;
    //   margin-bottom: 13px;
    //   padding-top: 13px;
      position: relative;
      cursor: pointer;
      border-top: 1px solid #c4d1d8;

      .sps-call {
        background: url(https://cdn-aliyun-pccss.huizuche.com/Content/Images/index/indexnew/call01.png);
        height: 32px;
        width: 31px;
        margin-bottom: 6px;
      }

      p {
        width: 36px;
        text-align: center;
        color: #768fa4;
        line-height: 17px;
      }
    }

    #spsCode {
      box-sizing: border-box;
      padding: 13px 10px;
      width: 34px;
    //   margin-bottom: 13px;
    //   padding-top: 13px;
      position: relative;
      cursor: pointer;
      border-top: 1px solid #c4d1d8;

      .sps-code {
        background: url(https://cdn-aliyun-pccss.huizuche.com/Content/Images/index/indexnew/wechat01.png);
        height: 29px;
        width: 33px;
        margin-bottom: 6px;
      }

      p {
        width: 36px;
        text-align: center;
        color: #768fa4;
        line-height: 17px;
      }
    }
  }
}
</style>

