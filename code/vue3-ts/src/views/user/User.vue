<template>
  <div class="s-user">
    <h1>{{viewStore.title}}</h1>
    <ul>
      <li v-for="(item,key) in userList.user" :key="key">
        <span>{{item.id}}</span>
        <span>{{item.name}}</span>
        <span>{{item.createDate}}</span>
        <span>{{item.roleType}}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Mutation } from 'vuex-class'
import { IViewState } from '@/store/view'
import axios from 'axios'

@Component({})
export default class Home extends Vue {
  @State private viewStore!: IViewState
  @Action('viewStore/setTitle') private changeTitleAc!: (params: string) => void
  @Action('user/getAllUser') private getAllUser!: () => Promise<any>

  created() {
    this.changeTitleAc('users')
    this.getUsers()
  }

  private userList: any = []
  // 直接axios调用
  private async getUser() {
    const result = await axios.get('/api/v1/users')
    console.log(result)
  }

  // 调用vuex模块中定义的方法
  private async getUsers() {
    this.userList = await this.getAllUser()
  }
}
</script>
<style lang="less" scoped>
.s-user {
}
</style>