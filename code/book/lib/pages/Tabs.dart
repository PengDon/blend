/*
 * @Author: don
 * @Date: 2020-07-22 17:21:57
 * @LastEditTime: 2020-07-22 17:33:21
 * @Description: 底部tab
 */
import 'package:flutter/material.dart';
import 'package:book/pages/tabs/Home.dart';
import 'package:book/pages/tabs/Bookrack.dart';
import 'package:book/pages/tabs/Setting.dart';

class TabsPage extends StatefulWidget {
  TabsPage({Key key}) : super(key: key);

  @override
  _TabsPageState createState() => _TabsPageState();
}

class _TabsPageState extends State<TabsPage> {
  // 标记当前选中tab下标
  int _currentIndex = 0;
  // tab集合
  List _pageList = [HomePage(), BookrackPage(), SettingPage()];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('阅读器'),
      ),
      body: this._pageList[this._currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: this._currentIndex,
        iconSize: 36.0,
        fixedColor: Colors.red,
        onTap: (int index) {
          setState(() {
            this._currentIndex = index;
          });
        },
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), title: Text("首页")),
          BottomNavigationBarItem(icon: Icon(Icons.book), title: Text("书架")),
          BottomNavigationBarItem(
              icon: Icon(Icons.settings), title: Text("设置")),
        ],
      ),
    );
  }
}
