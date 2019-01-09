<template>
  <li>
    <a
      href="/Comment/list?commentid=13673"
      target="_blank"
    >
      <div class="us-img">
        <img
          style="background-color: rgb(255, 255, 255); background-image: url(&quot;&quot;); display: inline;"
          :src="data.imgUrl"
        >
        <span class="us-country"><img
            :src="data.nationalFlag"
            title="法兰克福自驾"
            alt="法兰克福自驾"
          ></span>

      </div>
      <div class="us-cont">
        <h5>{{data.desc}}</h5>
        <span class="user-name">{{data.name}}</span>
        <div class="us-location">
          <i class="new-index-icon local"></i>
          <span>{{data.city}}</span>
          <i class="new-index-icon car"></i>
          <span>{{data.carType}}</span>
        </div>
        <div class="us-time">{{data.time}}</div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "UserShareItem",
  props: {
    data: Object
  }
};
</script>

<style lang="less" scoped>
li {
  width: 384px;
  margin-left: 24px;
  

  .us-img {
    width: 100%;
    height: 210px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .us-country {
      position: absolute;
      top: 14px;
      left: 20px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .us-cont {
    width: 100%;
    height: 136px;
    border: 1px solid #d9e0e4;
    padding: 0 20px;
    position: relative;
    box-sizing: border-box;
    h5 {
      width: 100%;
      margin-top: 22px;
      text-align: left;
      font-size: 16px;
      color: #2e3e4c;
      line-height: 20px;
    }

    .user-name {
      position: absolute;
      top: 48px;
      right: 20px;
      font-size: 14px;
      color: #768fa4;
      font-weight: bold;
    }
    .us-location {
      position: absolute;
      left: 20px;
      bottom: 20px;
      vertical-align: text-bottom;

      i {
        margin-right: 7px;
        vertical-align: baseline;

        .local {
          width: 16px;
          height: 20px;
          background-position: -216px 0;
        }

        .car {
          margin-left: 7px;
          width: 22px;
          height: 17px;
          background-position: -192px 0;
        }
      }

      span {
        font-size: 14px;
        color: #586f81;
      }
    }

    .us-time {
      position: absolute;
      right: 20px;
      bottom: 20px;
      font-size: 14px;
      color: #586f81;
    }
  }
}
</style>

