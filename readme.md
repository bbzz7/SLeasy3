# SLeasy 3

SLeasy 是一个面向移动端 H5 活动页的配置驱动型幻灯与动画框架。它以 jQuery 和 GSAP 为基础，将页面、子元素动画、资源预加载、路由、背景音乐、详情页和屏幕适配等常见能力整合在一起。

当前构建版本为 **3.9.23**。

## 主要能力

- 通过 JSON 配置幻灯页、详情页、浮动元素与 Loading 页面
- 支持上下、左右及双向滑动，并可启用首尾循环
- 使用 GSAP 时间轴编排子元素的入场、出场和连续动画
- 支持图片、音频、视频、iframe、Sprite 和 AE 序列帧等元素
- 支持资源预加载、额外资源加载及加载进度回调
- 提供宽度、高度、阈值、横竖屏旋转等多种舞台适配方式
- 支持路由、ScrollMagic、Web Audio、微信环境和移动端行内视频
- 提供遮罩、轮播、滚动容器、区域数据、微信 JSSDK 等扩展插件

## 目录结构

```text
SLeasy3/
├── build/           # 合并后的开发版与压缩版构建文件
├── club/            # GSAP 2 相关插件
├── club3/           # GSAP 3 相关插件
├── fileTemplates/   # HTML 与 Gulp 项目模板
├── lib/             # jQuery、GSAP、Howler 等运行时依赖
├── plugin/          # SLeasy 扩展插件
├── src/             # SLeasy 模块化源码
├── test/            # 插件与功能演示页面
├── gulpfile.js      # 构建及发布任务
└── package.json     # Node.js 开发依赖
```

## 快速开始

SLeasy 以浏览器全局变量的方式运行。最简页面需要先加载 jQuery 和 GSAP，再加载 SLeasy：

```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SLeasy 示例</title>
</head>
<body>
  <script src="lib/jquery.min.js"></script>
  <script src="lib/GSAP3/gsap.min.js"></script>
  <script src="build/SLeasy3.min.js"></script>
  <script>
    SLeasy.init({
      width: 750,
      height: 1500,
      host: 'images/',
      sliders: [
        {
          bg: 'page-1.jpg',
          subMotion: [
            {
              img: 'title.png',
              x: 75,
              y: 180,
              in: { y: -80, opacity: 0 }
            }
          ]
        },
        { bg: 'page-2.jpg' }
      ],
      on: {
        loaded: function () {
          console.log('资源加载完成');
        },
        sliderChange: function (index) {
          console.log('当前幻灯索引：', index);
        }
      }
    });
  </script>
</body>
</html>
```

> `build/SLeasy3.js` 已合并 Howler、GSAP Club、Hammer、Director、store.js、device.js 等项目运行时依赖，但 jQuery 与 GSAP 核心库仍应在它之前加载。开发时也可以参考 `fileTemplates/index.html` 按模块加载源码。

## 常用配置

```javascript
SLeasy.init({
  // 舞台与资源
  id: 'SLeasy',
  host: 'images/',
  width: 750,
  height: 1500,
  viewport: 375,
  bg: '',
  bgColor: '',

  // 切换与适配
  motionTime: 0.8,
  motionStyle: 0,
  motionDirection: 'upDown',
  swipeMode: 'y',
  loopMode: false,
  stageMode: 'width',
  fixWidthMode: false,
  rotateMode: false,
  alignMode: 'center',

  // 功能开关
  preload: true,
  autoStart: true,
  arrowMode: true,
  routerMode: false,
  scrollMagicMode: false,
  debugMode: 'auto',

  // 页面内容
  loading: {},
  sliders: [],
  details: [],
  floats: [],
  exLoadArr: [],

  // 音频
  musicUrl: '',
  musicLoop: true,
  musicAutoPlay: true,
  audios: {},
  audioType: 'webAudio'
});
```

完整默认值及注释请查看 [`src/config.js`](src/config.js)。

## 常用 API

| API | 用途 |
| --- | --- |
| `SLeasy.init(config)` | 初始化应用，返回可使用 `.done()` 的异步对象 |
| `SLeasy.config()` | 读取配置；传入对象时合并配置 |
| `SLeasy.goSlider(index)` | 跳转到指定幻灯页 |
| `SLeasy.goPre()` | 返回上一张幻灯页 |
| `SLeasy.goDetail(index)` | 打开指定详情页 |
| `SLeasy.closeDetail()` | 关闭当前详情页 |
| `SLeasy.insert(target, data)` | 动态插入元素，支持递归子元素 |
| `SLeasy.subMotion(data, type, index)` | 创建或播放子元素动画 |
| `SLeasy.resize()` | 重新计算舞台适配尺寸 |
| `SLeasy.respY()` | 调整超出安全区域元素的纵向位置 |
| `SLeasy.playMedia()` / `SLeasy.pauseMedia()` | 控制媒体播放状态 |
| `SLeasy.playSprite()` / `SLeasy.stopSprite()` | 控制 Sprite 动画 |
| `SLeasy.playAeLayer()` / `SLeasy.pauseAeLayer()` | 控制 AE 序列帧 |
| `SLeasy.path()` | 生成带资源路径及时间戳的 URL |
| `SLeasy.scope()` | 获取运行时状态对象 |

更多可用方法可从 `src/` 和 `plugin/` 中对应模块查看。

## 事件回调

`on` 配置支持以下主要生命周期回调：

- `loadProgress(percent)`：资源加载进度变化
- `loaded()`：资源加载完毕
- `sliderChange(index)`：幻灯页切换完成
- `subMotion(index)`：幻灯子动画开始
- `detailMotion(index)`：详情页子动画开始
- `detailOpen(index)`：详情页打开
- `detailClose(index)`：详情页关闭
- `timeline(timeline)`：子动画时间轴就绪
- `weixin()`：微信 JSBridge 就绪

## 开发与构建

需要 Node.js 和 npm。

```bash
npm install
npx gulp build
```

`build` 任务按模块顺序合并源码，生成：

- `build/SLeasy3.js`：未压缩构建文件
- `build/SLeasy3.min.js`：压缩构建文件

仓库还提供以下 Gulp 任务：

```bash
npx gulp publish       # 构建并整理传统发布目录
npx gulp deploy        # 生产部署，压缩业务 JavaScript
npx gulp deploy-noMin  # 生产部署，保留业务 JavaScript 原格式
```

`publish` 和 `deploy*` 面向采用本仓库目录约定的 H5 项目，执行前请先检查 `gulpfile.js` 中的 `SLeasyPath`、`LocalPath` 与 `cdn` 配置。

## 浏览器与第三方依赖

项目面向浏览器环境，核心代码依赖 jQuery 和 GSAP，并集成或附带 Howler、Hammer.js、Director、store.js、device.js、ScrollMagic、PixiJS 等库。部分 `club/` 与 `club3/` 文件属于第三方商业插件；使用和分发时请分别遵守其原始许可证及授权条款。

## 更新记录

详见 [`changelog.md`](changelog.md)。

## 作者与许可证

- 作者：宇文互动 庄宇
- 邮箱：30755405@qq.com
- 项目主页：https://github.com/bbzz7/SLeasy
- SLeasy 源码采用 [MIT License](https://opensource.org/licenses/MIT)；仓库内第三方库适用各自许可证。
