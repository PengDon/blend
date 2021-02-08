<template>
  <footer>
    <div class="wrapper"></div>
  </footer>
</template>
<script>
export default {
  name: 'CommFooter',
}
</script>
<style lang="less" scoped>
footer {
  padding: 4px;
  .wrapper {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
  }
}
</style>
