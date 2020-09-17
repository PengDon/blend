import 'package:flutter/material.dart';
import 'package:flutter_learn/widget/button.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // 配置
  var arr = [
    {'text': '基础组件示例', 'link': '/base'},
    {'text': '布局组件示例', 'link': '/layout'},
  ];

  // 组装配置信息
  List<Widget> _getButtons() {
    var tempList = arr.map((obj) {
      return MyButton(obj['text'], obj['link']);
    });
    return tempList.toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('常用示例')),
      body: Wrap(
        spacing: 10,
        runSpacing: 10,
        children: this._getButtons(), // 挂载
      ),
    );
  }
}
