/*
 * @Author: don
 * @Date: 2020-07-22 17:21:57
 * @LastEditTime: 2020-07-22 17:35:55
 * @Description: count计数
 */

import 'package:flutter/material.dart';

class CountPage extends StatefulWidget {
  // 1
  final Map arguments;
  // 2
  CountPage({Key key, this.arguments}) : super(key: key);
  // 3
  @override
  _CountPageState createState() => _CountPageState(arguments: this.arguments);
}

class _CountPageState extends State<CountPage> {
  // 4
  final Map arguments;
  // 5
  _CountPageState({this.arguments});

  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("${arguments['title']}"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
