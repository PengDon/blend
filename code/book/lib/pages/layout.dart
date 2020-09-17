import 'package:flutter/material.dart';
import 'package:flutter_learn/widget/button.dart';

class LayoutPage extends StatelessWidget {
  final arguments;

  const LayoutPage({Key key,this.arguments}) : super(key: key);

  // 配置
  static const arr = [
     {
       'text':'Wrap布局示例-可以让子控件自动换行的控件',
       'link':'/wrap'
     },
     {
       'text':'Flow流式布局示例',
       'link':'/flow'
     },
     {
       'text':'GridView网格布局示例',
       'link':'/gridview'
     },
     {
       'text':'Row/column布局示例-水平方向排列子控件',
       'link':'/row'
     }
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
