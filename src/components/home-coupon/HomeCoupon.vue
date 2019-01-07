<template>
  <div>
    <i
      class="show-coupon"
      :class="{hidecoupon:isShow}"
      @click="handleCouponClick"
    ></i>
    <section
      v-if="isShow"
      class="get-coupon-popup"
    >
      <div class="coupon-content">
        <div class="coupon-list">
          <div class="coupon-list-title">
            <h3>新人海外自驾大礼包 </h3>
            <span>注册即赠百元租车立减券</span>
          </div>
          <ul>
            <li>
              <div class="coupon-info">
                <h6>满3000减100元抵用券</h6>
                <p>有效期：2019-01-07 至 2019-02-06</p>
                <span>海外自驾100元优惠券</span>
              </div>
              <div class="discount">100<em>元</em></div>
            </li>
            <li>
              <div class="coupon-info">
                <h6>首单满500减50优惠券</h6>
                <p>有效期：2019-01-07 至 2019-01-22</p>
                <span>新人首单50元优惠券</span>
              </div>
              <div class="discount">50<em>元</em></div>
            </li>
          </ul>
        </div>
        <i
          class="close-icon"
          id="closeCouponList"
          @click="handleCloseClick"
        ></i>
        <span class="title-bg"></span>
        <div class="line-style"></div>
        <div class="get-coupon-btn">
          <span id="getAllCoupon">限时领券（1月9日截止）</span>
        </div>
        <div class="how-look-coupon">您可以在“个人中心”-“优惠券”中查看已领取的优惠券</div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: "HomeCoupon",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    handleCouponClick() {
      this.isShow = true;
    },
    handleCloseClick() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
.show-coupon {
  width: 90px;
  height: 110px;
  background-image: url(https://cdn-aliyun-pccss.huizuche.com/Content/module/CarList/imgs/carlist-coupon-sprite-new2.png);
  background-position: -390px -48px;
  position: fixed;
  right: 0px;
  bottom: 500px;
  cursor: pointer;
  z-index: 10;
  transition: right ease-in-out 400ms;
}
.hidecoupon {
  right: -80px;
}
.get-coupon-popup {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.6) !important;
  background: url(https://cdn-aliyun-hzccontent.huizuche.com/huizuche-content-img/index/background-transparent.png)
    no-repeat center center;

  .coupon-content {
    width: 520px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .coupon-list {
      width: 520px;
      padding-top: 40px;
      padding-left: 45px;
      background-color: #fd9525;
      border-radius: 8px 8px 0 0;
      box-sizing: border-box;

      .coupon-list-title {
        width: 100%;
        text-align: left;

        h3 {
          font-size: 30px;
          color: #fff;
          line-height: 32px;
          font-weight: bold;
        }
        span {
          font-size: 18px;
          color: #fff;
          margin-top: 12px;
          display: inline-block;
          line-height: 12px;
        }
      }
      ul {
        width: 470px;
        min-height: 116px;
        max-height: 350px;
        padding-bottom: 30px;
        margin-top: 20px;
        overflow-y: auto;
        overflow-x: hidden;
        box-sizing: border-box;

        li {
          width: 431px;
          height: 116px;
          background: url(https://cdn-aliyun-pccss.huizuche.com/Content/module/CarList/imgs/carlist-coupon-sprite-new.png)
            no-repeat center center;
          background-position: -2px -356px;
          margin-top: 15px;

          .coupon-info {
            width: 280px;
            height: 116px;
            padding-left: 20px;
            display: table-cell;
            vertical-align: middle;
            box-sizing: border-box;

            h6 {
              width: 280px;
              font-size: 18px;
              color: #fff;
              line-height: 18px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            p {
              color: #fff;
              line-height: 12px;
              margin-top: 10px;
            }
            span {
              height: 30px;
              border-radius: 15px;
              border: 1px solid #fff;
              display: inline-block;
              margin-top: 10px;
              color: #fff;
              font-size: 12px;
              padding: 0 20px;
              text-align: center;
              line-height: 30px;
            }
          }
          .discount {
            height: 116px;
            display: table-cell;
            vertical-align: middle;
            padding-left: 25px;
            font-size: 20px;
            font-weight: bold;
            color: #e6363a;
            text-align: left;
            font-family: din-Bold, "Hiragino Sans GB", "Microsoft YaHei" !important;
            box-sizing: border-box;

            em {
              font-weight: normal;
              font-size: 14px;
            }
          }
        }
      }
    }

    .close-icon {
      position: absolute;
      right: -63px;
      top: 0;
      width: 40px;
      height: 40px;
      background-image: url(https://cdn-aliyun-pccss.huizuche.com/Content/module/CarList/imgs/carlist-coupon-sprite-new2.png);
      background-position: -500px -48px;
      display: inline-block;
      cursor: pointer;
    }

    .title-bg {
      width: 160px;
      height: 150px;
      background-image: url(https://cdn-aliyun-pccss.huizuche.com/Content/module/CarList/imgs/carlist-coupon-sprite-new2.png);
      background-position: -210px -10px;
      position: absolute;
      right: 0;
      top: -60px;
    }

    .line-style {
      width: 520px;
      height: 18px;
      background-image: url(https://cdn-aliyun-pccss.huizuche.com/Content/module/CarList/imgs/carlist-coupon-sprite-new2.png);
      background-position: -390px -10px;
    }
    .get-coupon-btn {
      width: 520px;
      height: 86px;
      background-color: #fff;
      border-radius: 0 0 8px 8px;
      text-align: center;

      #getAllCoupon {
        width: 470px;
        height: 70px;
        background-image: linear-gradient(90deg, #ff772d 0, #ff4c4c 100%);
        border-radius: 8px;
        line-height: 70px;
        font-size: 18px;
        color: #fff;
        display: inline-block;
        cursor: pointer;
      }
    }
    .how-look-coupon {
      width: 521px;
      font-size: 12px;
      color: #fff;
      margin-top: 15px;
      text-align: center;
    }
  }
}
</style>

