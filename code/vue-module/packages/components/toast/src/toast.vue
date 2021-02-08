<template>
  <div v-if="mes!==''" class="mask">
    <div class="toast">
      <div class="toast-content">{{ mes }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    mes: {
      type:String,
      default:''
    },
    timeout: {
      type: Number,
      default: 2000,
    },
    callback: Function,
  },
  mounted() {
    console.log(this.mes)
  },
}
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toast {
  background: rgba(40, 40, 40, 0.85);
  text-align: center;
  border-radius: 3px;
  color: #ffffff;
  animation: xxx-kf-zoom-in 0.06s ease forwards;

  &-content {
    font-size: 16px;
    padding: 4px 12px;
    word-break: break-all;
  }
}
</style>
