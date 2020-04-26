<template>
  <div class="home">
    <HelloWorld msg="萌宠乐园" />
    <div class="banner-area">
      <DonSlider :list="list" :autoplay="2000" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DonSlider from '@/components/Slider.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    DonSlider
  },
  data() {
    return {
      list: [
        {
          img: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1254177258,1722891686&fm=15&gp=0.jpg'
        },
        {
          img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2751529299,1785036222&fm=26&gp=0.jpg'
        },
        {
          img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2913130440,2511112095&fm=26&gp=0.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.banner-area {
  width: 698px;
  height: 244px;
  margin: 0 auto;

  .don-slider {
    border-radius: 10px;
      > img {
        display: block;
        width: 698px;
        height: 244px;
      }
  }
}
</style>
