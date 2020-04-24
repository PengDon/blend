<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="banner-area">
      <DonSlider :list="list" />
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
  data () {
    return {
      list: [
        {
          img: 'https://hinabian-oss.oss-cn-shenzhen.aliyuncs.com/20200420/36117f6574c4979bd5ff2a41a3c5e20c.jpg'
        },
        {
          img: 'https://hinabian-oss.oss-cn-shenzhen.aliyuncs.com/20200420/c7a2b3b0bd4885689e9b684ddc719b25.jpg'
        },
        {
          img: 'https://hinabian-oss.oss-cn-shenzhen.aliyuncs.com/20200420/546056ae68d8a40f9f606e4cc96f988d.png'
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
