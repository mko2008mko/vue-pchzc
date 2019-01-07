<template>
  <section class="cartype-recommend">
    <div class="ctr-wrap">
      <div class="car-container">
        <div class="ctr-tab">
          <h3>精选车型</h3>
        </div>
        <div class="car-list-wrap">
            <CarTypeItemSmall v-for="item of data" :key="item.id" :data="item"/>
          
        
          <!-- <div
            v-for="(item) of data"
            :key="item.id"
            class="car-item"
            :class="{te:item.carLabel.length}"
          >
            <img
              :src="item.imgUrl"
              alt=""
            />
            <p class="car-name">{{item.carName}}</p>
            <div class="car-city"><i></i>{{item.carCity}}</div>
            <div class="car-price"><i>￥</i><span class="num">{{item.carPrice}}</span><span class="unit">/天起</span></div>
          </div> -->
        
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CarTypeItemSmall from "./components/CarTypeItemSmall";
export default {
  name: "HomeCarType",
  components: {
    CarTypeItemSmall
  },
  props: {
    data: Array
  }
};
</script>

<style lang="less" scoped>
.cartype-recommend {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAACCCAYAAACHMaL/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAvUlEQVQoz32SwW4EMQhDn/3/v1u1F/AeYLIz1WovKCjENnb4+f2Lge+lP5yuItrkuhC0A21ErJz2BqC2SDsiFiqTtLMjNShAHFH7LGpLlEMyLUpZqBdA9FAi1eEt6yCvgtTIgOxIVlUtZZRhW3Jqh6U6+66CgQq1btyIHgDS5YagnFX6T1A9NKscZss4B08cQbCbc/D0ljugt1DaStqMk9rICA//3pGtBzFre92Cz8l8yZNDeX2QDxcCnt8iL9V/v+9ed7dcAAAAAElFTkSuQmCC);
  background-size: 100% 130px;
  background-repeat: repeat-x;

  .ctr-wrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 90px;

    .car-container {
      width: 100%;
      .ctr-tab {
        width: 100%;
        h3 {
          color: #2e3e4c;
          font-size: 28px;
        }
      }
      .car-list-wrap {
        width: 100%;
        margin-top: 33px;
        border-left: 1px solid #e2e8ec;
        border-top: 1px solid #e2e8ec;
        display: flex;
        flex-wrap: wrap;
        // box-sizing: border-box;

      
      }
    }
  }
}
</style>

