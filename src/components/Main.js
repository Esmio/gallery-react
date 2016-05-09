require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';

// 获取图片数据
var imageDatas = require('../data/imageDatas.json')

var yeomanImage = require('../images/yeoman.png')
// 利用自执行函数，将图片名信息转成图片URL路径信息
var imageDatas = (function genImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleImageData = imageDatasArr[i] ;
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData ;
	}
	return imageDatasArr ;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <span>Hello</span>
        {console.log(imageDatas)}
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
