<template>
  <div class="home">
    <h1>{{viewStore.title}}</h1>

    <button v-on:click="changeTitle">切换标题</button>
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

  created() {}

  private changeTitle() {
    this.changeTitleAc("hello world");
  }
}
</script>
