<template>
  <article>
    <CommHeader />
    <div class="wrap">
      <aside class="left"></aside>
      <section class="right"></section>
    </div>
    <CommFooter />
  </article>
</template>

<script>
export default {
  name: 'commLayout',
  props: {},
  methods: {},
}
</script>
<style lang="less" scoped>
.wrap {
  margin: 0 auto;
  width: 100%;
  display: flex;

  .left {
    flex: 0 0 200px; /* 左侧固定200px */
    height: 500px;
    background: red;
  }
  .right {
    /* 此处解释下
      flex: 1 1 0%
      0%表示此处宽度是按照自身内容宽度来，此处自身内容宽度为0，但是分配剩余的空间，所以可以自适应变化
    */
    flex: 1; /* 随父级变化 */
    height: 500px;
    background: burlywood;
  }
}
</style>
