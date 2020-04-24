<template>
  <div class="don-slider">
    <div class="don-slider-wrapper">
      <div v-for="(item,key) in list" :key="key" class="don-slider-item" :style="curItem">
        <a href="">
          <img :src="item.img" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'don-slider',
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      index:0,
      curItem:''
    }
  },
  mounted () {

  },
  created() {
   this.autoPlay()
  },
  methods: {
    // 自动播放
    autoPlay(){
      setInterval(()=>{
          if(this.index<this.list.length){
            this.setTranslate(this.index)
            this.index++
          }else{
            this.index = 0
          }
      },3000)
    },
    // 图片移动动画
    setTranslate(n){
      this.curItem = `transform:translateX(-${n}00%);transition-duration: 600ms;`
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/css/comm/variables";
@import "../assets/css/comm/mixins";

@keyframes don-kf-opacity-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.@{css-prefix} {
  &-slider {
    width: 100%;
    overflow: hidden;
    position: relative;

    &-wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      transform: translate3d(0px, 0px, 0px);
      position: relative;
      z-index: 1;
      align-items: center;
      transition-property: transform;

      &-vertical {
        flex-direction: column;
      }
    }

    &-item {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
      transition: transform .6s;
      transform: translateX(-100%);

      a {
        display: block;
      }

      img {
        width: 100%;
        display: block;
      }
    }

    &-pagination {
      position: absolute;
      width: 100%;
      z-index: 2;
      left: 0;
      bottom: 10px;
      pointer-events: none;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      opacity: 0;
      animation: hnb-kf-opacity-in 0.3s linear 0.4s forwards;

      &-vertical {
        width: 0;
        height: 100%;
        flex-direction: column;
        bottom: 0;
        left: auto;
        right: 10px;
        justify-content: center;
      }

      &-item {
        margin: 5px;
        width: 6px;
        height: 6px;
        display: inline-block;
        border-radius: 100%;
        background-color: #b7d0e1;

        &-active {
          background-color: #999999;
        }
      }
    }
  }
}
</style>
