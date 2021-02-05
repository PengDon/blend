/*
 * @Author: don
 * @Date: 2021-02-05 17:19:38
 * @LastEditors: don
 * @LastEditTime: 2021-02-05 17:20:09
 * @Description: 让 ts 识别 .vue 文件
 */
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
