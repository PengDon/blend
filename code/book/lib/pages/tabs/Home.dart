/*
 * @Author: don
 * @Date: 2020-07-22 17:24:38
 * @LastEditTime: 2020-07-22 18:42:56
 * @Description: 首页
 */
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String key = '';

  Future getHttp() async {
    try {
      Response response =
          await Dio().get("http://api.zhuishushenqi.com/cats/lv2/statistics");
      print(response.toString());
      return response.toString();
    } catch (e) {
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          RaisedButton(
              child: Text("跳转到计数页面"),
              onPressed: () => {
                    Navigator.pushNamed(context, '/count',
                        arguments: {"title": "计数实例"})
                  }),
          SizedBox(
            height: 40,
          ),
          RaisedButton(
              child: Text("跳转到搜索页"),
              onPressed: () => {
                    Navigator.pushNamed(context, '/search',
                        arguments: {"id": "认知学"})
                  }),
          SizedBox(
            height: 40,
          ),
          RaisedButton(
            child: Text("发起请求"),
            onPressed: () => {
              setState(() {
                // this.key = '已发起请求';
                this.getHttp().then((value) => {this.key = value});
              })
            },
          ),
          Text("${key}")
        ],
      ),
    );
  }
}
