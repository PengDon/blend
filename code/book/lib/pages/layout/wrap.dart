import 'package:flutter/material.dart';

class WrapPage extends StatelessWidget {
  final arguments;

  const WrapPage({Key key,this.arguments}): super(key: key);
  
  // 一个渐变颜色的正方形集合
  List<Widget> Boxs() => List.generate(30, (index) {
        return Container(
          width: 50,
          height: 50,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: [
              Colors.orangeAccent,
              Colors.orange,
              Colors.deepOrange
            ]),
          ),
          child: Text(
            "${index}",
            style: TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
        );
      });
 
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(arguments['text']),),
      body: Wrap(
        spacing: 10, // 主轴上子控件的间距
        runSpacing: 10, // 交叉轴上子控件之间的间距
        children: Boxs(), // 要显示的子控件集合
      ),
    );
  }
}