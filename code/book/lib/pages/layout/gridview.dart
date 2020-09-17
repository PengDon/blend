import 'package:flutter/material.dart';

class GridViewPage extends StatefulWidget {
  final Map arguments;
  GridViewPage({Key key,this.arguments}) : super(key: key);

  @override
  _GridViewPageState createState() => _GridViewPageState(arguments:this.arguments);
}

class _GridViewPageState extends State<GridViewPage> {
  final Map arguments;
  _GridViewPageState({this.arguments});
  
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
      body: GridView(
              scrollDirection: Axis.vertical,
              gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 100, //子控件最大宽度为100
                childAspectRatio: 0.5,//宽高比为1:2
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
              ),
              padding: EdgeInsets.all(10),
              children: Boxs(),
            ),
    );
  }
}