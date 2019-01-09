<template>
  <section class="vendor-wall">
    <div class="vw-wrap">
      <h5>全球顶级车行 支持100%提车</h5>
      <ul>
        <li
          v-for="(item,index) in data"
          :key="item.id"
        >
          <a
            @mouseenter="currentHover=index"
            @mouseleave="index=99"
            href="#"
          >
            <img
              :src="currentHover===index?item.hoverImgUrl:item.imgUrl"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeVendorWall",
  props: {
    data: Array
  },
  data() {
    return {
      currentHover: 99,
      isHover: false
    };
  }
};
</script>

<style lang="less" scoped>
.vendor-wall {
  width: 100%;
  min-width: 1200px;

  .vw-wrap {
    width: 1200px;
    margin: 0 auto;

    h5 {
      width: 100%;
      font-size: 28px;
      color: #131c28;
      padding: 56px 0 26px;
    }

    ul {
      width: 100%;
      border: 1px solid #d9e0e4;
      display: flex;

      li {
        border-left: 1px solid #d9e0e4;
        text-align: center;
        flex: 1;

        &:first-child {
          border-left: none;
        }

        a {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>

