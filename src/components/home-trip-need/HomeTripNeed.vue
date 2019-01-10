<template>
  <section class="trip-need">
    <div class="tn-wrap">
      <HomeTitleTab
        :data="titleTab"
        @tabChange="handleTabChange"
      />
      <div class="tn-list-wrap">
        <transition-group name="fade">
          <TripNeedList
            :key="1"
            v-if="currIndex"
            :data="setoutList"
          />
          <TripNeedList2
            :key="2"
            v-else
            :data="driveList"
          />
        </transition-group>
      </div>
      <!-- <TripNeedList :data="setoutList"/> -->
    </div>
  </section>
</template>

<script>
import HomeTitleTab from "../home-title-tab/HomeTitleTab";
import TripNeedList from "./components/TripNeedList";
import TripNeedList2 from "./components/TripNeedList2";

export default {
  name: "HomeTripNeed",
  components: {
    HomeTitleTab,
    TripNeedList,
    TripNeedList2
  },
  props: {
    data: Array
  },
  data() {
    return {
      currIndex: 0,
      titleTab: {
        title: "出行必备",
        tabs: ["自驾必备", "出行玩乐"]
      },

      driveList: [],
      setoutList: []
    };
  },
  //   computed:{
  //       getList(){
  //           return this.list
  //       }
  //   },
  methods: {
    handleTabChange(index) {
      this.currIndex = index;
      //   if (index) {
      //     this.list = this.setoutList;

      //   } else {
      //     this.list = this.driveList;

      //   }
    }
  },
  created() {
    if (this.data.length) {
      this.driveList = this.data.filter(item => {
        return item.type === 1;
      });
      this.setoutList = this.data.filter(item => {
        return item.type === 2;
      });

      //   this.list = this.driveList;
    }
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //   transform: translatex(1200px);
  opacity: 0;
}

.trip-need {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  .tn-wrap {
    width: 1200px;
    margin: 0 auto;
    position: relative;

    .tn-list-wrap {
      width: 100%;
      height: 300px;
      margin-top: 50px;
      position: relative;
    }
  }
}
</style>

