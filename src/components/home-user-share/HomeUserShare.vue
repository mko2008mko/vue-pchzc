<template>
  <section class="user-share">
    <div class="user-wrap">
      <div class="user-tab">
        <h3>
          用户分享
          <small>百万+</small>
        </h3>
        <ul class="tab-item">

        </ul>
        <span class="all-share">
          <a
            href="/Comment/list"
            target="_blank"
          >全部&gt;</a>
        </span>
      </div>
      <div class="us-list-box">
        <span
          class="new-index-icon previous us-prev"
          style="left: -64px;"
          :class="{leftdisable:leftDisable}"
          @click="handleLeftClick"
        ></span>
        <span
          class="new-index-icon next us-next"
          style="right: -88px;"
          :class="{rightdisable:rightDisable}"
          @click="handleRightClick"
        ></span>
        <div class="us-list-cont">
          <ul
            class="us-list"
            :style="ulStyle"
          >
            <UserShareItem
              v-for="item in data"
              :key="item.id"
              :data="item"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserShareItem from "./components/UserShareItem";

export default {
  name: "HomeUserShare",
  components: {
    UserShareItem
  },
  data() {
    return {
      leftDisable: true,
      rightDisable: false,
      ulStyle: {
        left: "0px",
        width: "0px"
      }
    };
  },
  props: {
    data: Array
  },
  methods: {
    handleLeftClick() {
      let currLeft = parseInt(this.ulStyle.left);
      this.rightDisable = false;
      if (currLeft >= 0) {
        this.leftDisable = true;
      } else {
        this.leftDisable = false;
        currLeft += 1224;
        this.ulStyle.left = currLeft + "px";
        if (currLeft >= 0) {
          this.leftDisable = true;
        }
      }
    },
    handleRightClick() {
      let currLeft = parseInt(this.ulStyle.left);
      let lastLeft = parseInt(this.ulStyle.width) - 1224;
      this.leftDisable = false;
      if (currLeft > -lastLeft) {
        this.rightDisable = false;
        currLeft -= 1224;
        this.ulStyle.left = currLeft + "px";
        if (currLeft <= -lastLeft) {
          this.rightDisable = true;
        }
      }
    }
  },
  created() {
    // console.log(Math.ceil(this.data.length / 3));
    this.ulStyle.width = Math.ceil(this.data.length / 3) * 1224 + "px";
  }
};
</script>

<style lang="less" scoped>
.user-share {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;

  .user-wrap {
    width: 1200px;
    margin: 0 auto;
    position: relative;

    .user-tab {
      width: 100%;
      margin-top: 80px;
      display: flex;
      justify-content: space-between;

      h3 {
        color: #2e3e4c;
        font-size: 28px;

        small {
          display: inline-block;
          background-color: #feede4;
          padding: 0 6px;
          height: 21px;
          line-height: 21px;
          border-radius: 4px;
          text-align: center;
          color: #f58948;
          font-size: 14px;
          margin-left: 10px;
          vertical-align: middle;
        }
      }

      .all-share {
        a {
          font-size: 16px;
        }
      }
    }

    .us-list-box {
      width: 1224px;
      height: 360px;
      margin-top: 50px;
      position: relative;
        margin-left: -24px;

      .previous {
        position: absolute;
        width: 56px;
        height: 56px;
        top: 127px;
        cursor: pointer;
        background-position: 0 -230px;
      }
      .next {
        position: absolute;
        width: 56px;
        height: 56px;
        background-position: -168px -230px;
        top: 127px;
        cursor: pointer;
      }

      .leftdisable {
        background-position: -112px -230px;
        cursor: unset;
      }
      .rightdisable {
        background-position: -280px -230px;
        cursor: unset;
      }

      .us-list-cont {
        width: 1224px;
        height: 360px;
        overflow: hidden;
        margin: 0 auto;
        position: relative;

        .us-list {
          position: absolute;
          display: flex;
        //   justify-content: space-between;
          transition: all 200ms ease-in-out;
        }
      }
    }
  }
}
</style>

