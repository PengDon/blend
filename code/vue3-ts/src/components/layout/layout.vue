<template>
  <section class="xx-flexview">
    <slot name="navbar" v-if="showNavbar">
      <xx-navbar :title="title" v-if="!!title">
        <router-link :to="link || '/'" slot="left">
          <xx-navbar-back-icon></xx-navbar-back-icon>
        </router-link>
      </xx-navbar>
    </slot>

    <slot name="top"></slot>

    <section class="xx-scrollview" ref="scrollView" id="scrollView">
      <slot></slot>
    </section>

    <slot name="bottom"></slot>

    <slot name="tabbar"></slot>
  </section>
</template>

<script type="text/babel">
export default {
  name: 'xx-layout',
  props: {
    link: String,
    title: String,
    showNavbar: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
.@{css-prefix} {
  &-view {
    margin: 0 auto;
    max-width: @max-width;
    min-width: @min-width;
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: @navbar-height;
    }
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: @body-padding-bottom * 3;
    }
  }

  &-flexview {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: @max-width;
    min-width: @min-width;
  }

  &-scrollview {
    width: 100%;
    height: 100%;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    margin-bottom: -1px;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: @body-padding-bottom;
    }
  }
}

.ios .@{css-prefix}-scrollview {
  margin-top: 1px;
}

.hairline .@{css-prefix}-scrollview {
  margin-top: 0.5px;
}

</style>
