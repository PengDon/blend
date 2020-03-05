<template>
  <div class="user-main">
    <h1>{{viewStore.title}}</h1>
    <ul class="user-list">
      <li v-for="(item,key) in userList"
          :key="key">
        <span>{{key}}</span>
        <span>{{item.name}}</span>
        <span>{{item.createDate | format}}</span>
        <span>{{item.roleType}}</span>
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
  //   format: (value: number) => formatDate(value)
  // }
  // 第二种写法
  filters: {
    format(value: number) {
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
  text-align: center;
  > h1 {
    font-size: 30px;
  }
  .user-list {
    width: 600px;
    height: 400px;
    margin: 0 auto;
    > li {
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      border-bottom: 1px solid #bdbdbd;
      > span {
        display: inline-block;
        padding: 0 6px;
      }
    }
  }
}
</style>