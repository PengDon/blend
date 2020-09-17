import 'package:flutter/material.dart';

class RowPage extends StatefulWidget {
  final Map arguments;
  RowPage({Key key,this.arguments}) : super(key: key);

  @override
  _RowPageState createState() => _RowPageState(arguments:this.arguments);
}

class _RowPageState extends State<RowPage> {
  final Map arguments;
  _RowPageState({this.arguments});

  _getBox(text){
    return Container(
          width: 50,
          height: 50,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: [
              Colors.orangeAccent,
              Colors.orange,
              Colors.deepOrange
            ]),
          ),
          child: Text(
            "${text}",
            style: TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
        );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(arguments['text']),),
      body: ListView(
        children: <Widget>[
          Text('row示例'),
          Row(
            children: <Widget>[
              _getBox(1),
              _getBox(2),
              _getBox(3),
              _getBox(4),
              _getBox(5),
              _getBox(6),
              _getBox(7),
              _getBox(8),
              _getBox(9),
            ],
          ),
          SizedBox(
            height: 50,
          ),
          Text('column示例'),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              _getBox(1),
              _getBox(2),
              _getBox(3),
              _getBox(4),
            ],
          ),
        ],
      ),
    );
  }
}