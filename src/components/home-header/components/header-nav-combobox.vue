<template>
  <div
    class="combobox"
    v-if="data.length"
  >
    <i class="combobox-line"></i>
    <ul>
      <li
        v-for="item in data"
        :key="item.id"
      >
        <a href="/VAP/Insurance/Intro">{{item.subTitle}}</a>
      </li>

      <!-- <li>
        <a href="/VAP/Insurance/Intro">惠驾天下补充全险</a>
      </li>

      <li>
        <a href="/VAP/Insurance/Intro">惠驾天下补充全险</a>
      </li>

      <li>
        <a href="/VAP/Insurance/Intro">惠驾天下补充全险</a>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
};
</script>

<style lang="less" scoped>
.combobox {
  position: absolute;
  top: 100%;
  left: -16px;
  width: 160px;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.16);
  padding-bottom: 20px;

  .combobox-line {
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 1px;
    background-color: #e2e8ec;
  }

  ul {
    li {
      margin-top: 15px;
      padding-left: 16px;
      height: 22px;

      a {
        width: auto;
        font-size: 16px;
        position: relative;
        color: #586f81;

        &:hover {
          color: #33d397;
        }
      }
    }
  }
}
</style>

