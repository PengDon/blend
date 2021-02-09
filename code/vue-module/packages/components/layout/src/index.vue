<template>
  <article>
    <CommHeader />
    <main class="wrap">
      <aside class="left" v-if="isShowLeft">
        <slot name="left"></slot>
      </aside>
      <section class="right">
        <slot name="right"></slot>
      </section>
    </main>
    <CommFooter />
  </article>
</template>

<script>
export default {
  name: 'BaseLayout',
  props: {},
  data() {
    return {
      isShowLeft: true,
    }
  },
  methods: {},
}
</script>
<style lang="less" scoped>
.wrap {
  margin: 0 auto;
  width: 100%;
  min-height: 1000px;
  display: flex;

  .left {
    flex: 0 0 200px;
    height: 100%;
    // background: red;
  }
  .right {
    flex: 1;
    min-height: 600px;
    // background: burlywood;
    border-left: 1px solid #cccccc;
  }
}
</style>
