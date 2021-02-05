<template>
  <div>{{message}}</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  components: {},
})
export default class App extends Vue {
  message = '内容区域'
}
</script>
