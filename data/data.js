export default {
  _id: '1',
  // 场景标题
  title: '哈哈哈哈',
  // 描述
  description: '场景秒数',
  // 分享图
  imageSrc: '',
  // 图片素材对象
  image: '',
  // 类型
  type: 1,
  // 背景音乐
  bgAudio: '',
  // 是否是场景模板 --- 模板一般是可供挑选的。
  istpl: false,
  pages: [
    {
      _id: '1',
      // 场景模板ID
      sceneId: '1',
      // 页面模板标题
      name: '第一页',
      cmps: [
        {
          _id: '001',
          // 场景ID
          sceneId: '1',
          // 页面ID
          pageId: '1',
          // 类型
          type: 1,
          // 元素标题
          title: '文本文本',
          // css样式 对象
          css: {
            top: 100,
            left: 100,
            width: 100,
            height: 100,
            rotateAngle: 0
          },
          // 组件属性
          /**
           * content 文本组件字段
           * src 图片地址
           */
          properties: {
            content: '哈哈哈哈'
          },
          // 动画效果，对象数组
          animate: []
        },
        {
          _id: '002',
          // 场景ID
          sceneId: '1',
          // 页面ID
          pageId: '1',
          // 类型
          type: 1,
          // 元素标题
          title: '图片图片',
          // css样式 对象
          css: {
            top: 100,
            left: 100,
            width: 100,
            height: 100,
            rotateAngle: 0
          },
          // 组件属性
          /**
           * content 文本组件字段
           * src 图片地址
           */
          properties: {
            content: '哈哈哈哈'
          },
          // 动画效果，对象数组
          animate: []
        }
      ]
    },
    {
      _id: '2',
      // 场景模板ID
      sceneId: '1',
      // 页面模板标题
      name: '第二页',
      cmps: [
        {
          _id: '002',
          // 场景ID
          sceneId: '1',
          // 页面ID
          pageId: '2',
          // 类型
          type: 2,
          // 元素标题
          title: '图片图片',
          // css样式 对象
          css: {
            top: 100,
            left: 100,
            width: 100,
            height: 100
          },
          // 组件属性
          /**
           * content 文本组件字段
           * src 图片地址
           */
          properties: {
            src: 'http://res1.eqh5.com/o_1d1l87cve111bggdh4qltlk679.jpg?imageMogr2/auto-orient|imageMogr2/auto-orient/crop/!492x386a63a24'
          },
          // 动画效果，对象数组
          animate: []
        }
      ]
    }
  ]
}
