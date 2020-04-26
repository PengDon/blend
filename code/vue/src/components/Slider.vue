<template>
  <div class="don-slider">
    <div class="don-slider-wrapper">
      <div v-for="(item,key) in list" :key="key" class="don-slider-item dn" :style="key===index?curStyle:''">
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
      default: function() {
        return []
      }
    },
    speed: {
      type: Number,
      default: 3000,
      validator(val) {
        return /^\d*$/.test(val)
      }
    },
    autoplay: {
      default: 3000,
      validator(val) {
        return /^\d*$/.test(val)
      }
    }
  },
  data() {
    return {
      index: 0,
      autoPlayTimer: null, // 自动播放变量用于便于销毁
      curStyle: ''
    }
  },
  mounted() {

  },
  created() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      this.destroy()
      this.autoPlay()
    },
    // 自动播放
    autoPlay() {
      // 自动播放速度小于等于0 或者 list集合长度小于 1 则停止向下执行
      if (this.autoPlay <= 0 || this.list.length <= 1) return

      this.autoPlayTimer = setInterval(() => {
        this.index === (this.list.length - 1) ? this.setTranslate(this.index = 0) : this.setTranslate(this.index++)
      }, this.autoplay)
    },
    // 图片移动动画
    setTranslate(n) {
      // this.curStyle = `transform:translateX(-${n}00%);transition-duration: 600ms;display:block;`
      this.curStyle = `display:block;`
    },
    ontouch() {

    },
    // 销毁
    destroy() {
      clearInterval(this.autoPlayTimer)
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
      transition: transform .6ms;

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
