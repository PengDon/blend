import 'package:flutter/material.dart';

// 自定义button组件
class MyButton extends StatelessWidget {
  final String text;
  final String link;

  const MyButton(this.text,this.link, {Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
              child: Text(this.text),
              color: Colors.red,
              textColor: Colors.white,
              splashColor: Colors.black,
              highlightColor: Colors.green,
              onPressed: ()=>{
                Navigator.pushNamed(context, this.link,
                        arguments: {"text": this.text})
              }
    );
  }
}