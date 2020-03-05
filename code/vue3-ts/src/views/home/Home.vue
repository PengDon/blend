<template>
  <div class="home">
    <h1>{{viewStore.title}}</h1>
    <button v-on:click="changeTitle">切换标题</button>
    <ul>
      <li><a href="#/users">用户列表</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { IViewState } from "@/store/view";

@Component({})
export default class Home extends Vue {
  @State private viewStore!: IViewState;
  @Action("viewStore/setTitle") private changeTitleAc!: (
    params: string
  ) => void;

  created() {
    // 设置title
    document.title = "首页";
    this.changeTitleAc("首页");
  }

  private changeTitle() {
    this.changeTitleAc("hello world");
  }
}
</script>
