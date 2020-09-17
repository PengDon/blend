import 'package:flutter/material.dart';
import 'package:flutter_learn/home.dart';

import 'package:flutter_learn/pages/base.dart';
import 'package:flutter_learn/pages/base/button.dart';
import 'package:flutter_learn/pages/base/input.dart';
import 'package:flutter_learn/pages/base/text.dart';

import 'package:flutter_learn/pages/layout.dart';
import 'package:flutter_learn/pages/layout/wrap.dart';
import 'package:flutter_learn/pages/layout/flow.dart';
import 'package:flutter_learn/pages/layout/gridview.dart';
import 'package:flutter_learn/pages/layout/row.dart';


// 路由配置
final routes = {
  // 默认入口
  '/': (context) => HomePage(),
  // 基础组件
  '/base': (context, {arguments}) => BasePage(arguments: arguments), 
  '/button': (context, {arguments}) => ButtonPage(arguments: arguments),
  '/input': (context, {arguments}) => InputPage(arguments: arguments),
  '/text': (context, {arguments}) => TextPage(arguments: arguments),
  // 布局组件
  '/layout': (context, {arguments}) => LayoutPage(arguments: arguments),
  '/wrap': (context, {arguments}) => WrapPage(arguments: arguments),
  '/flow': (context, {arguments}) => FlowPage(arguments: arguments),
  '/gridview': (context, {arguments}) => GridViewPage(arguments: arguments),
  '/row': (context, {arguments}) => RowPage(arguments: arguments),
 
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
