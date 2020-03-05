<template>
  <div class="user-main">
    <h1>{{ viewStore.title }}</h1>
    <ul class="user-list">
      <li v-for="(item, key) in userList"
          :key="key">
        <span>{{ key }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.createDate | format }}</span>
        <span>{{ item.roleName }}</span>
        <!-- <span><button>切换角色</button></span> -->
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Mutation } from "vuex-class";
import { formatDate } from "@/utils";
import { IViewState } from "@/store/view";
import axios from "axios";

@Component({
  // // 第一种写法
  // filters: {
  //   format: (value: string) => formatDate(value)
  // }
  // 第二种写法
  filters: {
    format(value: string) {
      return formatDate(value);
    }
  }
})
export default class Home extends Vue {
  @State private viewStore!: IViewState;
  @Action("viewStore/setTitle") private changeTitleAc!: (
    params: string
  ) => void;
  @Action("user/getAllUser") private getAllUser!: () => Promise<any>;

  created() {
    this.changeTitleAc("用户列表");
    this.getUsers();
  }

  private userList: any = [];

  // // 直接axios调用
  // private async getUser() {
  //   const result = await axios.get("/api/v1/users");
  //   // console.log(result);
  // }

  // 调用vuex模块中定义的方法
  private async getUsers() {
    let res = await this.getAllUser();
    // console.log(res.data);
    this.userList = res.data;
  }
}
</script>
<style lang="less" scoped>
.user-main {
  width: 6rem;
  margin: 0 auto;
  > h1 {
    font-size: 0.2rem;
  }
  .user-list {
    width: 100%;
    height: 4rem;
    > li {
      text-align: left;
      height: 0.3rem;
      line-height: 0.3rem;
      font-size: 0.14rem;
      border-bottom: 1px solid #bdbdbd; /*no*/
      > span {
        display: inline-block;
        padding: 0 0.06rem;
      }
    }
  }
}
</style>
