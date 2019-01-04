<template>
  <nav>
    <ul>

      <li
        v-for="(item,index) in navData"
        :key="item.id"
        :class="{selected:index===currIndex}"
        @click="navHandleClick(item,index)"
      >
        <a href="#"> {{item.title}}
          <i
            v-if="item.sub.length"
            class="new-index-icon nav-down"
          ></i>
          <small
            v-if="item.isRecommend"
            class="new-index-icon nav-recommend"
          >荐</small>
        </a>
        <i
          v-if="item.sub.length"
          class="new-index-icon lt-line"
        ></i>
        <i
          v-if="item.sub.length"
          class="new-index-icon rt-line"
        ></i>
        <span class="nav-underline"></span>
        <HeaderNavComBox
          class="hnb"
          :data="item.sub"
        />
      </li>
      <!-- 
      <li class="selected">
        <a href="#"> 海外租车</a>
      </li>
      <li>
        <a href="#"> 海外专车</a>
        <span class="nav-underline"></span>
      </li>
      <li>
        <a href="#"> 驾照翻译
          <i class="new-index-icon nav-down"></i>
        </a>
        <i class="new-index-icon lt-line"></i>
        <i class="new-index-icon rt-line"></i>
        <span class="nav-underline"></span>

      </li>
      <li>
        <a href="#"> 保险服务
          <i class="new-index-icon nav-down"></i>
        </a>
        <i class="new-index-icon lt-line"></i>
        <i class="new-index-icon rt-line"></i>
        <span class="nav-underline"></span>
        <HeaderNavComBox class="hnb" />
      </li>
      <li>
        <a href="#"> 自驾攻略
          <small class="new-index-icon nav-recommend">荐</small>
        </a>
        <span class="nav-underline"></span>
      </li>
      <li>
        <a href="#"> 特价专区</a>
        <span class="nav-underline"></span>
      </li> -->
    </ul>
  </nav>
</template>

<script>
import HeaderNavComBox from "./header-nav-combobox";

export default {
  name: "HeaderNav",
  components: {
    HeaderNavComBox
  },
  data() {
    return {
      currIndex: 0,
      navData: [
        {
          id: 1,
          title: "海外租车",
          sub: [],
          isRecommend: false,
          linkUrl: "/"
        },
        {
          id: 2,
          title: "海外专车",
          sub: [],
          isRecommend: false,
          linkUrl: "/zhuanche"
        },
        {
          id: 3,
          title: "驾照翻译",
          sub: [
            { id: 1, subTitle: "驾照全球通", subLinkUrl: "" },
            { id: 2, subTitle: "驾照翻译件", subLinkUrl: "" }
          ],
          isRecommend: false,
          linkUrl: "/"
        },
        {
          id: 4,
          title: "保险和服务",
          sub: [
            { id: 1, subTitle: "惠驾天下补充全险", subLinkUrl: "" },
            { id: 2, subTitle: "优驾全球乘驾险", subLinkUrl: "" },
            { id: 3, subTitle: "优驾全球乘驾险", subLinkUrl: "" },
            { id: 4, subTitle: "优驾全球乘驾险", subLinkUrl: "" },
            { id: 5, subTitle: "优驾全球乘驾险", subLinkUrl: "" }
          ],
          isRecommend: false,
          linkUrl: "/"
        },
        {
          id: 5,
          title: "自驾攻略",
          sub: [],
          isRecommend: true,
          linkUrl: ""
        },
        {
          id: 6,
          title: "特价专区",
          sub: [],
          isRecommend: false,
          linkUrl: ""
        }
      ]
    };
  },
  methods: {
    navHandleClick(item, index) {
      if (item.sub.length) {
        return;
      } else {
        this.currIndex = index;
      }
    }
  }
};
</script>

<style lang="less" scoped>
nav {
  height: 79px;
  // margin-left: 38px;
  margin-top: 11px;

  ul {
    display: flex;
    height: 100%;

    li {
      height: 100%;
      margin-left: 30px;
      padding-top: 36px;
      position: relative;
      cursor: pointer;
      box-sizing: border-box;

      a {
        width: 100%;
        height: 100%;
        display: inline-block;
        color: #586f81;
        font-size: 18px;

        .nav-down {
          width: 12px;
          height: 8px;
          margin-left: 4px;
          background-position: -324px 0;
          transition: all 100ms ease-in-out;
        }

        .nav-recommend {
          position: absolute;
          top: 22px;
          right: -24px;
          font-size: 12px;
          color: #fff;
          text-align: center;
          line-height: 18px;
          width: 25px;
          height: 18px;
          background-position: -274px 0;
        }
      }

      .nav-underline {
        width: 0;
        height: 3px;
        background-color: #33d397;
        position: absolute;
        left: 0;
        bottom: 0;
        transition: width 200ms ease-in-out;
      }

      .line() {
        width: 1px;
        height: 79px;
        background-position: -399px 0;
        position: absolute;
        top: 0;
        display: none;
      }

      .lt-line {
        // &:extend(.line);
        .line();
        // width: 1px;
        // height: 79px;
        // background-position: -399px 0;
        // position: absolute;
        // left: -16px;
        // top: 0;
        left: -16px;
      }
      .rt-line {
        // &:extend(.line);
        .line();
        // width: 1px;
        // height: 79px;
        // background-position: -399px 0;
        // position: absolute;
        right: -16px;
        // top: 0;
      }

      .hnb {
        display: none;
        // opacity: 0;
        // transition: all 500ms ease-in;
      }

      &:hover {
        .rt-line {
          display: inline;
        }
        .lt-line {
          display: inline;
        }
        .nav-down {
          transform: rotate(180deg);
        }
        .nav-underline {
          width: 100%;
        }
        .hnb {
          //   opacity: 1;
          display: block;
        }
      }
    }

    .selected:after {
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

