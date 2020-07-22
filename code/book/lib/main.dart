/*
 * @Author: don
 * @Date: 2020-07-22 17:21:57
 * @LastEditTime: 2020-07-22 17:36:50
 * @Description: 入口文件
 */
import 'package:flutter/material.dart';
import 'package:book/routes/routes.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      onGenerateRoute: onGenerateRoute,
    );
  }
}
