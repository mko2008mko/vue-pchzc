<template>
  <div class="ht-tab-wrap">
    <h3>{{data.title}}</h3>
    <ul class="ul-tab">
      <li
        v-for="(item,index) in data.tabs"
        :key="item"
        :class="{selected:currentIndex===index}"
        @click="handleClick(index)"
      >
        {{item}}
        <span class="underline"></span>
      </li>
      <!-- <li
        class=""
        @click="twoCLick"
      >
        出行玩乐
        <span class="underline"></span>
      </li> -->

    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeTitleTab",
  props: {
    data: Object
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index;
      this.$emit("tabChange", index);
    }
  }
};
</script>

<style lang="less" scoped>
.ht-tab-wrap {
  width: 100%;
  margin-top: 80px;
  display: flex;
  h3 {
    color: #2e3e4c;
    font-size: 28px;
  }
  .ul-tab {
    display: flex;
    li {
      font-size: 20px;
      line-height: 42px;
      color: #2e3e4c;
      margin-left: 70px;
      position: relative;
      cursor: pointer;

      .underline {
        width: 0;
        height: 3px;
        background-color: #33d397;
        position: absolute;
        left: 0;
        bottom: 0;
        transition: width 200ms ease-in-out;
      }

      &:hover {
        .underline {
          width: 100%;
        }
      }
    }

    .selected::after {
      content: "";
      width: 100%;
      height: 3px;
      background-color: #33d397;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>

