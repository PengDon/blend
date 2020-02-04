<template>
  <div class="xx-notify"
       v-html="msg">
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Notify extends Vue {
  // 在typescript中这种写法的意思就是!前面的这个变量一定不是undefined或者null，!叫非空断言操作符。
  @Prop() private msg!: string | number;
}
</script>
<style scoped lang="less">
.@{css-prefix} {
  &-notify {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    right: 0;
    background-color: rgba(40, 40, 40, 0.85);
    line-height: 0.28rem;
    font-size: 0.26rem;
    color: #fff;
    padding: 0.4rem 0.24rem 0.3rem 0.24rem;
    opacity: 0;
    animation: xx-kf-down-in 0.2s linear forwards;
    word-break: break-all;
    text-align: center;
    z-index: @base-zindex * 2000;
    &-out {
      animation: xx-kf-up-out 0.15s linear forwards;
    }
  }
}
</style>
