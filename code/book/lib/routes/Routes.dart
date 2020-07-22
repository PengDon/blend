/*
 * @Author: don
 * @Date: 2020-07-22 17:10:49
 * @LastEditTime: 2020-07-22 18:03:42
 * @Description: 路由工具类
 */
import 'package:flutter/material.dart';
import 'package:book/pages/count.dart';
import 'package:book/pages/Tabs.dart';
import 'package:book/pages/Search.dart';

// // 路由配置
// final routes = {
//   // 无参数
//   '/': (context) => TabsPage(),
//   // 有参数[可选]
//   '/search': (context, {arguments}) => SearchPage(arguments: arguments)
//   // 有参数[必填]
//   '/search': (context, arguments) => SearchPage(arguments: arguments)
// };

// 路由配置
final routes = {
  // 无参数
  '/': (context) => TabsPage(),
  // 有参数[必填]
  '/count': (context, {arguments}) => CountPage(arguments: arguments),
  '/search': (context, {arguments}) => SearchPage(arguments: arguments)
};

// 固定写法
var onGenerateRoute = (RouteSettings settings) {
  // 统一处理
  final String name = settings.name;
  print(settings.name);
  final Function pageContentBuilder = routes[name];

  if (pageContentBuilder != null) {
    if (settings.arguments != null) {
      final Route route = MaterialPageRoute(
          builder: (context) =>
              pageContentBuilder(context, arguments: settings.arguments));
      return route;
    } else {
      final Route route =
          MaterialPageRoute(builder: (context) => pageContentBuilder(context));
      return route;
    }
  }
};
