<template>
  <div class="tn-list-box">
    <div class="tn-list-wrap">
      <TripNeedHot :data="hotData" />
      <div
        class="tn-other"
        v-if="otherList.length"
      >
        <ul>
          <TripNeedOtherItem
            v-for="item in otherList"
            :key="item.id"
            :data="item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TripNeedHot from "./TripNeedHot";
import TripNeedOtherItem from "./TripNeedOtherItem";

export default {
  name: "TripNeedList2",
  components: {
    TripNeedHot,
    TripNeedOtherItem
  },
  data() {
    return {
      hotData: null,
      otherList: []
    };
  },
  props: {
    data: Array
  },
  created() {
    if (this.data.length) {
        console.log(this.data[0]);
      let hotIndex;
      let hasHot = this.data.some((item, index) => {
        if (item.isHot) {
          hotIndex = index;
          return true;
        }
      });
      if (hasHot) {
        this.hotData = this.data[hotIndex];
      }
      this.otherList = this.data.filter(item => {
        return !item.isHot;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.tn-list-box {
  width: 100%;
  height: 300px;
  // margin-top: 50px;
  // position: relative;
  left: 0;
  top:0;
  position:absolute;

  .tn-list-wrap {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    display: flex;

    .tn-other {
      width: 894px;
      margin-left: 24px;

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 300px;

        li {
          margin-bottom: 26px;
          //   display: block;
          //   width: 30%;
          //   height: 137px;
        }
      }
    }
  }
}
</style>

