import 'package:flutter/material.dart';

class ButtonPage extends StatefulWidget {
  final Map arguments;
  ButtonPage({Key key, this.arguments}) : super(key: key);

  @override
  _ButtonPageState createState() => _ButtonPageState(arguments: this.arguments);
}

class _ButtonPageState extends State<ButtonPage> {
  final Map arguments;
  _ButtonPageState({this.arguments});

  _log() {
    print('点击了按钮');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(arguments['text']),
      ),
      body: ListView(
        children: <Widget>[
          RaisedButton(
            child: Text('被禁用的按钮'),
            onPressed: null, // 传null，则表示按钮禁用
          ),
          RaisedButton(
            child: Text('绑定了点击事件'),
            onPressed: _log, // 传null，则表示按钮禁用
          ),
          RaisedButton(
            onPressed: _log,
            child: Text("设置按钮颜色"),
            color: Colors.red,
          ),
          RaisedButton(
            onPressed: _log,
            child: Text("设置文本颜色"),
            color: Colors.red,
            textColor: Colors.white,
          ),
          RaisedButton(
            onPressed: _log,
            child: Text("设置点击时水波纹的颜色"),
            color: Colors.white,
            textColor: Colors.blue,
            splashColor: Colors.black,
          ),
          RaisedButton(
            onPressed: _log,
            child: Text("设置点击点击（长按）按钮后的颜色,也叫高亮颜色"),
            color: Colors.yellow,
            textColor: Colors.blue,
            splashColor: Colors.black,
            highlightColor: Colors.green,
          ),
          RaisedButton(
            onPressed: _log,
            child: Text("设置阴影范围"),
            color: Colors.black,
            textColor: Colors.white,
            splashColor: Colors.red,
            highlightColor: Colors.green,
            elevation: 30,
          ),
          RaisedButton(
              onPressed: _log,
              child: Text("设置内边距"),
              color: Colors.black,
              textColor: Colors.white,
              splashColor: Colors.red,
              highlightColor: Colors.green,
              elevation: 30,
              padding: EdgeInsets.all(20)),
          RaisedButton(
              onPressed: _log,
              color: Colors.blue,
              textColor: Colors.white,
              child: Text('设置内边距效果2'),
              padding: EdgeInsets.fromLTRB(0, 30, 20, 40)),
          RaisedButton(
              onPressed: _log,
              color: Colors.yellow,
              textColor: Colors.red,
              child: Text('设置内边距效果3'),
              padding: EdgeInsets.only(top: 30)),
          RaisedButton(
            onPressed: _log,
            child: Text('改变按钮形状-带斜角的长方形边框'),
            color: Colors.black,
            textColor: Colors.white,
            shape: BeveledRectangleBorder(
                side: BorderSide(
                  color: Colors.white,
                ),
                borderRadius: BorderRadius.all(Radius.circular(10))),
          ),
          RaisedButton(
            onPressed: _log,
            child: Text('改变按钮形状2-圆形边框'),
            color: Colors.black,
            textColor: Colors.white,
            shape: CircleBorder(
              side: BorderSide(
                color: Colors.white,
              ),
            ),
          ),
          RaisedButton(
            onPressed: _log,
            child: Text('改变按钮形状3-两端是半圆的边框'),
            color: Colors.black,
            textColor: Colors.white,
            shape: StadiumBorder(),
          ),
          FlatButton(
            onPressed: _log,
            child: Text("FlatButton-扁平按钮"),
            color: Colors.blue,
            textColor: Colors.black,
            shape: RoundedRectangleBorder(
                side: BorderSide(
                  color: Colors.white,
                  width: 1,
                ),
                borderRadius: BorderRadius.circular(8)),
          ),
          OutlineButton(
            onPressed: _log,
            child: Text("OutlineButton-边线按钮"),
            textColor: Colors.red,
            splashColor: Colors.green,
            highlightColor: Colors.black,
            shape: BeveledRectangleBorder(
              side: BorderSide(
                color: Colors.red,
                width: 1,
              ),
              borderRadius: BorderRadius.circular(10),
            ),
          ),
          IconButton(
            icon: Icon(Icons.home),
            onPressed: _log,
            color: Colors.blueAccent,
            highlightColor: Colors.red,
          )
        ],
      ),
    );
  }
}
