/*
 * @Author: don
 * @Date: 2020-07-22 17:37:57
 * @LastEditTime: 2020-07-22 18:04:59
 * @Description: 搜索页面
 */
import 'package:flutter/material.dart';

class SearchPage extends StatefulWidget {
  final Map arguments;
  SearchPage({Key key, this.arguments}) : super(key: key);

  @override
  _SearchPageState createState() => _SearchPageState(arguments: this.arguments);
}

class _SearchPageState extends State<SearchPage> {
  final Map arguments;
  _SearchPageState({this.arguments});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("搜索"),
      ),
      body: Text("搜索页面:${arguments['id']}"),
    );
  }
}
