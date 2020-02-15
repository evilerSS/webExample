module.exports = class ClickFloatFlower {
  static defaultTextList = [
    "♥富强♥",
    "♥民主♥",
    "♥文明♥",
    "♥和谐♥",
    "♥自由♥",
    "♥平等♥",
    "♥公正♥",
    "♥法治♥",
    "♥爱国♥",
    "♥敬业♥",
    "♥诚信♥",
    "♥友善♥"
  ];
  static defaultColorList = [
    "#ed1941",
    "#8F4B4A",
    "#f05b72",
    "#f8aba6",
    "#c88400",
    "#e0861a",
    "#fcaf17",
    "#4e72b8",
    "#9b95c9",
    "#6f60aa",
    "#c77eb5",
    "#f173ac",
    "#145b7d",
    "#5c7a29",
    "#6d5826"
  ];
  _textList: Array<string>;
  _colorList: Array<string>;
  _floatFlowerList: Array<any>;
  _flowAnimation: Object;
  constructor() {
    this.init();
    this.listerClickEvent();
  }
  init() {
    this._textList = ClickFloatFlower.defaultTextList;
    this._colorList = ClickFloatFlower.defaultColorList;
    this._floatFlowerList = [];
  }
  setTextList(textList: Array<any>) {
    this._textList = textList;
  }
  setColorList(colorText: Array<any>) {
    this._colorList = colorText;
  }
  listerClickEvent() {
    const self = this;
    window.addEventListener("click", e => {
      const textDom = document.createElement("span");
      const randomTextIndex = Math.floor(Math.random() * self._textList.length);
      const randomColorIndex = Math.floor(
        Math.random() * self._colorList.length
      );
      // 设置初始值
      textDom.style.fontSize = "1rem";
      textDom.style.backgroundColor = "rgba(255, 255, 255, 0)";
      textDom.style.padding = "0 5px";
      // 设置随机内容
      textDom.innerText = self._textList[randomTextIndex];
      // 设置随机背景色
      textDom.style.color = self._colorList[randomColorIndex];
      textDom.style.position = "fixed";
      textDom.style.left = e.x + "px";
      // 设置不可呗选中
      textDom.style.userSelect = "none";
      textDom.style.msUserSelect = "none";
      textDom.style.webkitUserModify = "none";
      // 移动&消失动画
      const moveRange = 150;
      let domTopOrigin = e.y;
      let domPosTop = e.y;
      textDom.style.top = domPosTop + "px";
      let timer = setInterval(() => {
        domPosTop -= 2;
        textDom.style.top = domPosTop + "px";
        textDom.style.opacity = (
          (moveRange - domTopOrigin + domPosTop) /
          moveRange
        ).toFixed(2);
        if (domTopOrigin - domPosTop >= moveRange) {
          clearInterval(timer);
          document.body.removeChild(textDom);
        }
      }, 10);
      // 显示
      document.body.appendChild(textDom);
    });
  }
};
