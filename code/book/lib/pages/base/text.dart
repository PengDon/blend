import 'package:flutter/material.dart';

class TextPage extends StatefulWidget {
  final Map arguments;
  TextPage({Key key, this.arguments}) : super(key: key);

  @override
  _TextPageState createState() => _TextPageState(arguments: this.arguments);
}

class _TextPageState extends State<TextPage> {
  final Map arguments;
  _TextPageState({this.arguments});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(arguments['text']),
        ),
        // Row下面用TextField时，需要在TextField外层套一个Expanded,否则运行会报错
        body: ListView(
          children: <Widget>[
              Text('基础显示'),
              Text(
                "Hello world 左",
                textAlign: TextAlign.left,
              ),
              Text(
                "Hello world 右",
                textAlign: TextAlign.right,
              ),
              Text(
                "Hello world 居中",
                textAlign: TextAlign.center,
              ),
              Text(
                "超出显示省略号 Hello world! I'm Jack. " * 4,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
              Text(
                "Hello world",
                textScaleFactor: 1.5,
              ),
              Text("Hello world",
                style: TextStyle(
                  color: Colors.blue,
                  fontSize: 18.0,
                  height: 1.2,  
                  fontFamily: "Courier",
                  background: new Paint()..color=Colors.yellow,
                  decoration:TextDecoration.underline,
                  decorationStyle: TextDecorationStyle.dashed
                ),
              ),
              Text("I am Jack",
                style: TextStyle(
                  inherit: false, // 不继承默认样式
                  color: Colors.grey
                ),
              ),
              Text(
                "Flutter is Google’s mobile UI framework",
                style: TextStyle(
                  color: Colors.red,
                  fontSize: 38,
                  letterSpacing: 1,
                  wordSpacing: 2,
                  height: 1.2,
                  fontWeight: FontWeight.w600
                ),
              ),
          ],
        ),
      );
  }
}
