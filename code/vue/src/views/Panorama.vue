<template>
  <div class="PSViewer" ref="psvdbg"></div>
</template>

<script>
// 1、Photo Sphere Viewer基于 three.js,因此先安装依赖
// 地址：https://www.npmjs.com/package/three   或 npm i three --save-dev
// 2、安装依赖Photo Sphere Viewer
// 下载地址：https://photo-sphere-viewer.js.org/   或  npm install photo-sphere-viewer@3.5.1 --save-dev
// const THREE = require("three");
// const PhotoSphereViewer = require("photo-sphere-viewer");
import PhotoSphereViewer from "photo-sphere-viewer";

export default {
  name: "PSViewer",

  data() {
    return {
      width: 798,
      height: 498,
      img: require("../assets/images/sun.jpg"),
    };
  },

  beforeDestory() {},

  mounted() {
    this.init();
  },

  methods: {
    // photo-sphere-viewer
    init: function () {
      const self = this;

      var PSV = new PhotoSphereViewer({
        // Panorama, given in base 64
        panorama: self.img,

        // Container
        container: self.$refs.psvdbg,

        // Deactivate the animation
        time_anim: false,

        // Display the navigation bar
        // navbar: true,
        navbar: ["autorotate", "zoom", "fullscreen"],
        navbar_style: {
          backgroundColor: "rgba(58,67,77,0.7)",
        },

        // Resize the panorama
        size: {
          width: "100%",
          height: "498px",
        },
      });
    },
  },
};
</script>

<style lang="less">
.PSViewer {
  overflow: hidden;
  display: block;
  width: 100%;
  height: inherit;
  position: relative;
  .fix {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    width: 200px;
  }
  .psv-hud {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 35px;
    z-index: 10;
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .psv-container {
    display: block;
    width: 100%;
    height: inherit;
    .psv-loader-container {
      width: 50px;
      height: 50px;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin-top: -25px;
      * {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .psv-canvas-container {
    display: block;
    width: 100%;
    height: inherit;
    canvas {
      display: block;
      width: 100%;
      height: inherit;
    }
  }
  .psv-navbar {
    &.psv-navbar--open {
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 60;
      padding: 8px 0;
      display: block;
      background-color: rgba(255, 255, 255, 0.7);
      .psv-caption {
        display: inline-block;
      }
      .psv-button {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        float: left;
        &.psv-zoom-button {
          float: left;
          width: auto;
          .psv-zoom-button-minus {
            width: 20px;
            float: left;
            height: 20px;
            background-color: transparent;
            line-height: 20px;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
          }
          .psv-zoom-button-range {
            float: left;
            padding: 10px 8px 0 8px;
            background-color: transparent;
            cursor: pointer;
            .psv-zoom-button-line {
              width: 50px;
              height: 2px;
              background-color: rgba(0, 0, 0, 0.7);
              position: relative;
              .psv-zoom-button-handle {
                position: absolute;
                top: -3px;
                left: -3.5px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.7);
              }
            }
          }
          .psv-zoom-button-plus {
            width: 20px;
            float: left;
            height: 20px;
            background-color: transparent;
            line-height: 20px;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
          }
        }
        &.psv-autorotate-button {
          margin-right: 8px;
          margin-left: 8px;
        }
        &.psv-fullscreen-button {
          float: right;
          margin-right: 8px;
        }
      }
      .psv-caption {
        height: inherit;
      }
    }
  }
}
</style>
