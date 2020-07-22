/*
 * @Author: don
 * @Date: 2020-07-22 17:26:53
 * @LastEditTime: 2020-07-22 17:27:42
 * @Description: 设置页面
 */
import 'package:flutter/material.dart';

class SettingPage extends StatefulWidget {
  SettingPage({Key key}) : super(key: key);

  @override
  _SettingPageState createState() => _SettingPageState();
}

class _SettingPageState extends State<SettingPage> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("设置页面"),
    );
  }
}
