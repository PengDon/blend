import 'package:flutter/material.dart';
import 'package:flutter_learn/widget/button.dart';

class BasePage extends StatelessWidget {
  final arguments;
  const BasePage({Key key,this.arguments}) : super(key: key);
  
  // 配置
  static const arr = [
     {'text': '按钮示例', 'link': '/button'},
     {'text': '文本输入框示例', 'link': '/input'},
     {'text': '文本示例', 'link': '/text'}
  ];
  
  // 组装配置信息
  List<Widget> _getButtons() {
    var tempList = arr.map((obj) {
        return  MyButton(obj['text'],obj['link']);
    });
    return tempList.toList();
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(arguments['text']),),
      body: Wrap(
            spacing: 10,
            runSpacing: 10,
            children: this._getButtons(), // 挂载
      ),
    );
  }
}