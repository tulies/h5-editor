<template>
  <el-container class="main-container">
    <el-header class="main-header">
      <div class="header-container">
        <div class="logo">
          <i class="logo-icon sceneiconfont sceneicon-changjingguanli" />
        </div>
        <dl class="comp_panel">
          <dd>
            <p class="icon">
              <i class="sceneiconfont sceneicon-xingzhuang-wenzi" />
            </p>
            <p class="title">
              文本
            </p>
          </dd>
          <dd>
            <p class="icon">
              <i class="sceneiconfont sceneicon-xingzhuang-tupian" />
            </p>
            <p class="title">
              图片
            </p>
          </dd>
          <dd>
            <p class="icon">
              <i class="sceneiconfont sceneicon-music4" />
            </p>
            <p class="title">
              音乐
            </p>
          </dd>
          <dd>
            <p class="icon">
              <i class="sceneiconfont sceneicon-rongxuejirongjiechi" />
            </p>
            <p class="title">
              背景
            </p>
          </dd>
          <dd>
            <p class="icon">
              <i class="sceneiconfont sceneicon-icon_yingyongguanli" />
            </p>
            <p class="title">
              组件
            </p>
          </dd>
          <dd>
            <p class="icon">
              <i class="sceneiconfont sceneicon-moshubang" />
            </p>
            <p class="title">
              特效
            </p>
          </dd>
        </dl>
        <div class="actions">
          <el-button class="action-item" size="small" type="primary">
            预览和设置
          </el-button>
          <el-button class="action-item" size="small" type="primary">
            保存
          </el-button>
          <el-button class="action-item" size="small" type="primary">
            发布
          </el-button>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="72px">
        <div class="left-aside">
          <dl class="comp_panel">
            <dd>
              <p class="icon">
                <i class="sceneiconfont sceneicon-biaodanzujian-shurukuang" />
              </p>
              <p class="title">
                元素模板
              </p>
            </dd>
            <dd>
              <p class="icon">
                <i class="sceneiconfont sceneicon-gongnengdingyi" />
              </p>
              <p class="title">
                功能模板
              </p>
            </dd>
            <dd>
              <p class="icon">
                <i class="sceneiconfont sceneicon-tubiao-qiapian" />
              </p>
              <p class="title">
                单页模板
              </p>
            </dd>
            <dd>
              <p class="icon">
                <i class="sceneiconfont sceneicon-icon_loading" />
              </p>
              <p class="title">
                特权模板
              </p>
            </dd>
          </dl>
          <dl class="txt_pannel">
            <dd>偏好</dd>
            <dd>公告</dd>
            <dd>教程</dd>
            <dd>反馈</dd>
          </dl>
        </div>
      </el-aside>
      <el-main class="main-workspace">
        <workspace-manage :page-data="curPage" />
      </el-main>
      <el-aside width="260px">
        <div class="right-aside">
          <el-tabs class="pannel-el-tabs" type="border-card" :stretch="true">
            <el-tab-pane label="组件属性">
              <element-manage />
            </el-tab-pane>
            <el-tab-pane label="图层管理">
              <layer-manage />
            </el-tab-pane>
            <el-tab-pane label="页面管理">
              <page-manage :scene-data="sceneData" />
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
import LayerManage from '@/components/views/c/layer-manage'
import PageManage from '@/components/views/c/page-manage'
import WorkspaceManage from '@/components/views/c/workspace-manage'
import ElementManage from '@/components/views/c/element-manage'
import sceneData from '@/data/data.js'

export default {
  components: {
    LayerManage,
    PageManage,
    WorkspaceManage,
    ElementManage
  },
  data() {
    return {
      sceneData: {},
      curEl: null,
      curPage: null
    }
  },
  created() {
    const { pages } = sceneData
    this.sceneData = sceneData
    this.curPage = pages[0]
    console.log('场景数据', this.sceneData)
    console.log('页面数据', this.curPage)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/config.scss";
.main-container {
  height: 100vh;
}
.main-header {
  height: 56px;
  padding: 0;
  border-bottom: 1px solid #ccd5db;
}
.header-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  .logo {
    height: 56px;
    width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-right: 1px solid #ccd5db;
    color: $mainColor;
  }

  .comp_panel {
    display: flex;
    dd {
      width: 60px;
      height: 56px;
      text-align: center;

      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      color: #333;

      cursor: pointer;

      .icon {
        font-size: 20px;
      }
      .title {
        font-size: 12px;
      }

      &:hover {
        background-color: $mainColor;
        color: #fff;
      }
    }
  }

  .actions {
    padding-right: 10px;
    .action-item {
      padding: 9px;
    }
  }
}
.main-workspace{
  background-color:#efefef;
}
.left-aside {
  width: 100%;
  height: 100%;
  border-right: 1px solid #ccd5db;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .comp_panel {
    display: flex;
    flex-direction: column;
    dd {
      width: 100%;
      height: 56px;
      text-align: center;

      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      color: #333;

      cursor: pointer;

      .icon {
        font-size: 20px;
      }
      .title {
        font-size: 12px;
      }

      &:hover {
        background-color: $mainColor;
        color: #fff;
      }
    }
  }
  .txt_pannel {
    padding: 10px 0;
    border-top: 1px solid #efefef;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
  }
}

.right-aside {
  width: 100%;
  height: 100%;
  border-left: 1px solid #ccd5db;
}
</style>

<style lang="scss">
.pannel-el-tabs {
    height: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    >.el-tabs__header .el-tabs__item{
      padding:0 10px;
      &:nth-child(2), &:last-child{
        padding:0 10px;
      }
      &.is-active{
        color:#000;
      }
      &:not(.is-disabled):hover{
        color:#000;
      }
      &:not(.is-disabled):hover{
        color:#000;
      }

    }
    >.el-tabs__content {
      flex: 1;
      padding: 0;
    }
  }
</style>
