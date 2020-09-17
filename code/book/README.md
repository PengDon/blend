# gradle卡顿慢
1. 修改项目根目录下/android/build.gradle
```js
google()
jcenter()
//  改为
 maven { url 'https://maven.aliyun.com/repository/google' }
 maven { url 'https://maven.aliyun.com/repository/jcenter' }
 maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
```
1. 修改flutter目录下/packages/flutter_tools/gradle/flutter.gradle文件
```js
private static final String DEFAULT_MAVEN_HOST = "https://storage.googleapis.com";
改为
private static final String DEFAULT_MAVEN_HOST = "https://storage.flutter-io.cn/download.flutter.io";
```



## 参考
* [flutter 中文文档](https://book.flutterchina.club/intro.html)