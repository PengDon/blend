<template>
  <header>
    <div class="wrapper"></div>
  </header>
</template>

<script>
export default {
  name: 'CommHeader',
  methods: {
    onLogin() {
      this.$emit('onLogin')
    },
    onLogout() {
      this.$emit('onLogout')
    },
    onCreateAccount() {
      this.$emit('onCreateAccount')
    },
  },
}
</script>
<style lang="less" scoped>
header {
  padding: 4px;
  .wrapper {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
  }
}
</style>
