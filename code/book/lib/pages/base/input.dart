import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class InputPage extends StatefulWidget {
  final Map arguments;
  InputPage({Key key, this.arguments}) : super(key: key);

  @override
  _InputPageState createState() => _InputPageState(arguments: this.arguments);
}

class _InputPageState extends State<InputPage> {
  final Map arguments;
  int curIndex = 0; // 当前展示项，默认为1
  
  _InputPageState({this.arguments});

  TextEditingController _name = TextEditingController();
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _name.text = '文本赋值'; // 初始值
  }

  // 配置
  var arr = [
    {'id': 0, 'text': '最简文本输入框'},
    {'id': 1, 'text': '带icon的文本输入框'},
    {'id': 2, 'text': 'labelText'},
    {'id': 3, 'text': 'labelStyle'},
    {'id': 4, 'text': 'helperText'},
    {'id': 5, 'text': 'helperStyle'},
    {'id': 6, 'text': 'errorText'},
    {'id': 7, 'text': 'hintText'},
    {'id': 7, 'text': 'hasFloatingPlaceholder'},
    {'id': 8, 'text': '综合设置'},
    {'id': 9, 'text': 'prefixIcon、prefixText 图片和预填充的文字'},
    {'id': 10, 'text': 'suffixIcon、suffixText'},
    {'id': 11, 'text': 'counterText'},
    {'id': 12, 'text': 'filled，fillColor颜色填充'},
    {'id': 13, 'text': 'InputBorder.none 没有任何边框'},
    {'id': 14, 'text': 'OutlineInputBorder 外边线'},
    {'id': 15, 'text': 'UnderlineInputBorder 底边线'},
    {'id': 16, 'text': 'keyboardType 手机号'},
    {'id': 17, 'text': 'TextField textInputAction 搜索'},
    {'id': 18, 'text': 'TextField textInputAction 前往'},
    {'id': 19, 'text': '获取输入的文本内容'},
    {'id': 20, 'text': '点击键盘上的动作按钮触发回调,无参数'},
    {'id': 21, 'text': '点击键盘上的动作按钮触发回调,参数为输入值'},
    {'id': 22, 'text': '输入限制-WhitelistingTextInputFormatter'},
    {'id': 23, 'text': '输入限制-BlacklistingTextInputFormatter'},
    {'id': 24, 'text': '输入长度限制-LengthLimitingTextInputFormatter'},
    {'id': 25, 'text': '边框表单、label 动效'},
    {'id': 26, 'text': '多行表单'},
    {'id': 27, 'text': '密码框'},
  ];

  // 组件列表
  var list = [
    TextField(decoration: InputDecoration()),
    TextField(
      decoration: InputDecoration(
        icon: Icon(Icons.person),
      ),
    ),
    TextField(
      decoration: InputDecoration(
        icon: Icon(Icons.person),
        labelText: "labelText",
      ),
    ),
    TextField(
      decoration: InputDecoration(
        icon: Icon(Icons.person),
        labelText: "labelText",
        labelStyle: TextStyle(
          color: Colors.red,
          fontSize: 20,
        ),
      ),
    ),
    TextField(
      decoration: InputDecoration(
        icon: Icon(Icons.person),
        labelText: "labelText",
        helperText: "helperText",
      ),
    ),
    TextField(
      decoration: InputDecoration(
        icon: Icon(Icons.person),
        labelText: "labelText",
        helperText: "helperText",
        helperStyle: TextStyle(
          color: Colors.green, //绿色
          fontSize: 20, //字体变大
        ),
      ),
    ),
    TextField(
      decoration: InputDecoration(
        icon: Icon(Icons.person),
        labelText: "labelText",
        helperText: "helperText",
        errorText: "errorText",
      ),
    ),
    TextField(
      decoration: InputDecoration(
        icon: Icon(Icons.person),
        hintText: "hintText",
      ),
    ),
    TextField(
            decoration: InputDecoration(
              icon: Icon(Icons.person),
              prefixIcon: Icon(Icons.perm_identity),
              labelText: "手机号",
              helperText: "用户名为手机号或者邮箱",
              errorText: "手机号码不正确",
              hintText: "请输入手机号码",
              prefixText: "+86",
              suffixIcon: Icon(
                Icons.remove_red_eye,
              ),
              suffixText: "隐藏输入文本",
              counterText: "0/10",
              filled: true,
            ),
          ),
    TextField(
      decoration: InputDecoration(
        icon: Icon(Icons.person), // 输入框前加入图片
        hintText: "hintText", // 提示输入信息
        labelText: "labelText", // 描述输入框，当输入框获取焦点时默认会浮动到上方
        labelStyle: TextStyle(
          // labelText的样式
          color: Colors.red,
          fontSize: 20,
        ),
        hasFloatingPlaceholder:
            false, // labelText是否浮动，默认为true，修改为false则labelText在输入框获取焦点时不会浮动且不显示
        helperText: "helperText", // 输入框下方提示
        helperStyle: TextStyle(
          // 输入框下方提示样式
          color: Colors.green, //绿色
          fontSize: 20, //字体变大
        ),
        errorText: "errorText", // 错误提示，若该属性不为null，那么labelText失效
        prefixIcon: Icon(Icons.perm_identity), // 输入框前端预填充图片
        prefixText: "prefixText", // 预填充文字
        suffixIcon: Icon(
          Icons.remove_red_eye,
        ), // 输入框后端预填充图片
        suffixText: "suffixText", // 输入框后端预填充文字
        counterText: "counterText", // 输入框右下方文字
        filled: true, // 颜色填充
        fillColor: Colors.grey,
        // 边界设置 - 外边界
        enabledBorder: OutlineInputBorder(
          // 边角
          borderRadius: BorderRadius.all(
            Radius.circular(30), // 边角为30
          ),
          borderSide: BorderSide(
            color: Colors.amber, // 边线颜色为黄色
            width: 2, // 边线宽度为2
          ),
        ),
        focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
          color: Colors.green, // 边框颜色为绿色
          width: 5, // 宽度为5
        )),
        // 边界设置 - 底边界
        errorBorder: UnderlineInputBorder(
          // 边角
          borderRadius: BorderRadius.all(
            Radius.circular(30), // 边角为30
          ),
          borderSide: BorderSide(
            color: Colors.amber, // 边线颜色为黄色
            width: 2, // 边线宽度为2
          ),
        ),
        focusedErrorBorder: UnderlineInputBorder(
            borderSide: BorderSide(
          color: Colors.green, // 边框颜色为绿色
          width: 5, // 宽度为5
        )),
      ),
    ),
    TextField(
      decoration: InputDecoration(
        icon: Icon(Icons.person),
        hasFloatingPlaceholder: false,
        labelText: "labelText",
        helperText: "helperText",
        errorText: "errorText",
        // hintText: "hintText",
        prefixIcon: Icon(Icons.perm_identity),
        prefixText: "prefixText",
      ),
    ),
    TextField(
      decoration: InputDecoration(
        hasFloatingPlaceholder: false,
        labelText: "labelText",
        counterText: "counterText",
      ),
    ),
    TextField(
      decoration: InputDecoration(
        hasFloatingPlaceholder: false,
        labelText: "labelText",
        hintText: "hintText",
        prefixIcon: Icon(Icons.perm_identity),
        filled: true,
        fillColor: Colors.grey,
      ),
    ),
    TextField(
      decoration: InputDecoration(
        border:InputBorder.none,
        labelText: "labelText",
        helperText: "helperText",
        hintText: "hintText",
        prefixIcon: Icon(Icons.perm_identity),
      ),
    ),
    TextField(
      decoration: InputDecoration(
        enabledBorder: OutlineInputBorder(
          // 边角
          borderRadius: BorderRadius.all(
            Radius.circular(30), // 边角为30
          ),
          borderSide: BorderSide(
            color: Colors.amber, // 边线颜色为黄色
            width: 2, // 边线宽度为2
          ),
        ),
        focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
          color: Colors.green, // 边框颜色为绿色
          width: 5, // 宽度为5
        )),
        labelText: "labelText",
        helperText: "helperText",
        hintText: "hintText",
        prefixIcon: Icon(Icons.perm_identity),
      ),
    ),
    TextField(
      decoration: InputDecoration(
        errorBorder: UnderlineInputBorder(
          // 边角
          borderRadius: BorderRadius.all(
            Radius.circular(30), // 边角为30
          ),
          borderSide: BorderSide(
            color: Colors.amber, // 边线颜色为黄色
            width: 2, // 边线宽度为2
          ),
        ),
        focusedErrorBorder: UnderlineInputBorder(
            borderSide: BorderSide(
          color: Colors.green, // 边框颜色为绿色
          width: 5, // 宽度为5
        )),
        labelText: "labelText",
        helperText: "helperText",
         errorText: "errorText",
        hintText: "hintText",
        prefixIcon: Icon(Icons.perm_identity),
      ),
    ),
    TextField(
      decoration: InputDecoration(
        labelText: "手机号",
        helperText: "helperText",
        errorText: "errorText",
        prefixText: "+86",
        hintText: "请输入手机号",
        prefixIcon: Icon(Icons.perm_identity),
      ),
      keyboardType: TextInputType.phone, // 手机号
    ),
    TextField(
      decoration: InputDecoration(
        labelText: "搜索",
        helperText: "helperText",
        errorText: "errorText",
        hintText: "请输入搜索内容",
        prefixIcon: Icon(Icons.perm_identity),
      ),
      textInputAction: TextInputAction.search,
    ),
    TextField(
      decoration: InputDecoration(
        labelText: "前往",
        helperText: "helperText",
        errorText: "errorText",
        hintText: "hintText",
        prefixIcon: Icon(Icons.perm_identity),
      ),
      textInputAction: TextInputAction.go,
    ),
    TextField(
      decoration: InputDecoration(
        labelText: "labelText",
        helperText: "helperText",
        errorText: "errorText",
        hintText: "hintText",
        prefixIcon: Icon(Icons.perm_identity),
      ),
      onChanged: (val){
        print(val);
      },
    ),
    TextField(
      decoration: InputDecoration(
        labelText: "labelText",
        helperText: "helperText",
        errorText: "errorText",
        hintText: "hintText",
        prefixIcon: Icon(Icons.perm_identity),
      ),
      onEditingComplete: (){
        print("点击了键盘上的动作按钮");
      },
    ),
    TextField(
      decoration: InputDecoration(
        labelText: "labelText",
        helperText: "helperText",
        errorText: "errorText",
        hintText: "hintText",
        prefixIcon: Icon(Icons.perm_identity),
      ),
      onSubmitted: (val){
        print("点击了键盘上的动作按钮，当前输入框的值为：${val}");
      },
    ),
    TextField(
      decoration: InputDecoration(
        labelText: "输入限制",
        helperText: "helperText",
        hintText: "只容许输入a-z的小写字母",
        prefixIcon: Icon(Icons.perm_identity),
      ),
      inputFormatters: [WhitelistingTextInputFormatter(RegExp("[a-z]"))],
    ),
    TextField(
      decoration: InputDecoration(
        labelText: "输入限制",
        helperText: "helperText",
        hintText: "不容许输入a-z的小写字母",
        prefixIcon: Icon(Icons.perm_identity),
      ),
      inputFormatters: [BlacklistingTextInputFormatter(RegExp("[a-z]"))],
    ),
    TextField(
      decoration: InputDecoration(
        labelText: "输入长度限制",
        helperText: "helperText",
        errorText: "最大长度为6",
        hintText: "请输入内容",
        prefixIcon: Icon(Icons.perm_identity),
      ),
      inputFormatters: [LengthLimitingTextInputFormatter(6)],
    ),
    TextField(
      decoration: InputDecoration(
        labelText: '表单label',
        labelStyle: TextStyle(
          color: Colors.pink,
          fontSize: 12,
        ),
        helperText: 'helperText',
        hintText: 'Placeholder...',
        border: OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.pink,
          ),
        ),
        focusedBorder: OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.pink,
          ),
        )
      ),
    ),
    TextField(
      maxLines: 4,
      decoration: InputDecoration(hintText: '多行文本'),
    ),
    TextField(
      obscureText: true,
      decoration: InputDecoration(hintText: '密码框'),
    ),
    

  ];

  // 根据配置生成按钮列表
  List<Widget> _getButtons() {
    return arr.map((value) {
      return RaisedButton(
          child: Text(value['text']),
          color: Colors.red,
          textColor: Colors.white,
          splashColor: Colors.black,
          highlightColor: Colors.green,
          onPressed: () => {
                setState(() {
                  curIndex = value['id'];
                })
              });
    }).toList();
  }

  // 动态匹配
  _matching() {
    return list[curIndex];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(arguments['text']),
      ),
      // Row下面用TextField时，需要在TextField外层套一个Expanded,否则运行会报错
      body: ListView(
        children: <Widget>[
          Wrap(
            spacing: 5,
            runSpacing: 2,
            children: this._getButtons(),
          ),
          SizedBox(
            height: 30,
          ),
          Text('点击按钮会展示对应效果'),
          Expanded(child: this._matching()),
          SizedBox(
            height: 100,
          ),
          Text('单独示例-->赋值取值,双向绑定'),
          TextField(
            decoration: InputDecoration(
              hintText: '账户',
              hintStyle: TextStyle(
                fontSize: 12,
                color: Colors.grey[300],
              ),
            ),
            controller: _name,
            onChanged: (value) {
              setState(() {
                _name.text = value;
              });
            },
          ),
          SizedBox(
            height: 10,
          ),
          Text('${_name.text}'),
          SizedBox(
            height: 100,
          ),
        ],
      ),
    );
  }
}
