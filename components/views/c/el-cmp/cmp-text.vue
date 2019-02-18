<template>
  <div class="element-cpm">
    <el-tabs v-model="activeName" class="element-tabs" :stretch="true" @tab-click="handleClick">
      <el-tab-pane class="element-tab-pane" label="样式" name="first">
        <div class="element-group-container scroller-container">
          <el-row class="row-item" type="flex" align="middle">
            <el-col :span="24">
              <el-input
                v-model="properties.content"
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
              />
            </el-col>
          </el-row>
          <el-row class="row-item" type="flex" align="middle">
            <el-col class="editor-btn">
              <el-tooltip class="item" content="居左" placement="top" open-delay="300">
                <a class="selected">
                  <i class="sceneiconfont sceneicon-zuoduiqi" />
                </a>
              </el-tooltip>
            </el-col>
            <el-col class="editor-btn">
              <el-tooltip class="item" content="居中" placement="top" open-delay="300">
                <a><i class="sceneiconfont sceneicon-juzhongduiqi" /></a>
              </el-tooltip>
            </el-col>
            <el-col class="editor-btn">
              <el-tooltip class="item" content="居右" placement="top" open-delay="300">
                <a><i class="sceneiconfont sceneicon-youduiqi" /></a>
              </el-tooltip>
            </el-col>
            <el-col class="editor-btn">
              <el-tooltip class="item" content="两端对齐" placement="top" open-delay="300">
                <a><i class="sceneiconfont sceneicon-zuoyouduiqi" /></a>
              </el-tooltip>
            </el-col>
            <el-col class="editor-btn">
              <el-tooltip class="item" content="加粗" placement="top" open-delay="300">
                <a><i class="sceneiconfont sceneicon-zitijiacu" /></a>
              </el-tooltip>
            </el-col>
            <el-col class="editor-btn">
              <el-tooltip class="item" content="倾斜" placement="top" open-delay="300">
                <a><i class="sceneiconfont sceneicon-zitixieti" /></a>
              </el-tooltip>
            </el-col>
            <el-col class="editor-btn">
              <el-tooltip class="item" content="下划线" placement="top" open-delay="300">
                <a><i class="sceneiconfont sceneicon-zitixiahuaxian" /></a>
              </el-tooltip>
            </el-col>
            <el-col class="editor-btn">
              <el-tooltip class="item" content="清除样式" placement="top" open-delay="300">
                <a><i class="sceneiconfont sceneicon-yiqingchugaojing" /></a>
              </el-tooltip>
            </el-col>
          </el-row>
          <el-row class="row-item" type="flex" align="middle">
            <el-col :span="7">
              字体
            </el-col>
            <el-col :span="17">
              <el-select v-model="css.fontFamily" placeholder="默认字体">
                <el-option key="默认字体" label="默认字体" value="默认字体" />
                <el-option key="微软雅黑" label="微软雅黑" value="微软雅黑" />
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row-item" type="flex" align="middle">
            <el-col :span="7">
              字号
            </el-col>
            <el-col :span="17">
              <el-input-number
                v-model="css.fontSize"
                controls-position="right"
                :min="8"
                :max="100"
                @change="handleChange"
              />
              <span style="font-size:18px;color:#888;">
                px
              </span>
            </el-col>
          </el-row>

          <el-row class="row-item" type="flex" align="middle">
            <el-col :span="7">
              行高
            </el-col>
            <el-col :span="17">
              <el-input-number
                v-model="css.fontSize"
                controls-position="right"
                :min="8"
                :max="100"
                @change="handleChange"
              />
            </el-col>
          </el-row>
          <el-row class="row-item" type="flex" align="middle">
            <el-col :span="7">
              字距
            </el-col>
            <el-col :span="17">
              <el-input-number
                v-model="css.fontSize"
                controls-position="right"
                :min="8"
                :max="100"
                @change="handleChange"
              />
            </el-col>
          </el-row>

          <el-row class="row-item" type="flex" align="middle">
            <el-col :span="7">
              文字颜色
            </el-col>
            <el-col :span="5">
              <el-color-picker v-model="css.color" />
            </el-col>
            <el-col :span="7">
              背景颜色
            </el-col>
            <el-col :span="5">
              <el-color-picker v-model="css.backgroundColor" />
            </el-col>
          </el-row>

          <div class="divider">
            <span class="divider-inner-text">
              功能设置
            </span>
          </div>
          <el-row class="row-item" type="flex" align="middle">
            <el-col :span="7">
              点击跳转
            </el-col>
            <el-col :span="17">
              <el-select v-model="css.clickType" placeholder="无">
                <el-option key="无" label="无" value="无" />
                <el-option key="跳转连接" label="跳转连接" value="跳转连接" />
                <el-option key="跳转页面" label="跳转页面" value="跳转页面" />
                <el-option key="拨打电话" label="拨打电话" value="拨打电话" />
              </el-select>
            </el-col>
          </el-row>
          <div class="more-styles">
            <el-collapse v-model="css.activeNames" @change="handleChange">
              <el-collapse-item title="边框" name="1">
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    边框样式
                  </el-col>
                  <el-col :span="17">
                    <el-select v-model="css.clickType" placeholder="无">
                      <el-option key="无" label="无" value="无" />
                      <el-option key="跳转连接" label="跳转连接" value="跳转连接" />
                      <el-option key="跳转页面" label="跳转页面" value="跳转页面" />
                      <el-option key="拨打电话" label="拨打电话" value="拨打电话" />
                    </el-select>
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    边框颜色
                  </el-col>
                  <el-col :span="17">
                    <el-color-picker v-model="css.color" />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    边框尺寸
                  </el-col>
                  <el-col :span="17">
                    <el-input-number
                      v-model="css.fontSize"
                      controls-position="right"
                      :min="8"
                      :max="100"
                      @change="handleChange"
                    />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    边框弧度
                  </el-col>
                  <el-col :span="17">
                    <el-input-number
                      v-model="css.fontSize"
                      controls-position="right"
                      :min="8"
                      :max="100"
                      @change="handleChange"
                    />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    边距
                  </el-col>
                  <el-col :span="17">
                    <el-input-number
                      v-model="css.fontSize"
                      controls-position="right"
                      :min="8"
                      :max="100"
                      @change="handleChange"
                    />
                  </el-col>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="阴影" name="2">
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    阴影颜色
                  </el-col>
                  <el-col :span="17">
                    <el-color-picker v-model="css.color" />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    阴影大小
                  </el-col>
                  <el-col :span="17">
                    <el-input-number
                      v-model="css.fontSize"
                      controls-position="right"
                      :min="8"
                      :max="100"
                      @change="handleChange"
                    />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    阴影方向
                  </el-col>
                  <el-col :span="17">
                    <el-input-number
                      v-model="css.fontSize"
                      controls-position="right"
                      :min="8"
                      :max="100"
                      @change="handleChange"
                    />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    阴影模糊
                  </el-col>
                  <el-col :span="17">
                    <el-input-number
                      v-model="css.fontSize"
                      controls-position="right"
                      :min="8"
                      :max="100"
                      @change="handleChange"
                    />
                  </el-col>
                </el-row>
              </el-collapse-item>
              <el-collapse-item title="尺寸与位置" name="3">
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    尺寸
                  </el-col>
                  <el-col :span="17">
                    <span>宽：</span><el-input-number
                      v-model="css.width"
                      :controls="false"
                      :min="0"
                      :max="1000"
                      style="width:50px;"
                      class="number-col2"
                    />
                    <span>高：</span><el-input-number
                      v-model="css.height"
                      class="number-col2"
                      :controls="false"
                      :min="0"
                      :max="2000"
                      style="width:50px;"
                    />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    位置
                  </el-col>
                  <el-col :span="17">
                    <span>X：</span><el-input-number
                      v-model="css.width"
                      :controls="false"
                      :min="0"
                      :max="1000"
                      style="width:50px;"
                      class="number-col2"
                    />
                    <span>Y：</span><el-input-number
                      v-model="css.height"
                      class="number-col2"
                      :controls="false"
                      :min="0"
                      :max="2000"
                      style="width:50px;"
                    />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    旋转
                  </el-col>
                  <el-col :span="17">
                    <el-slider
                      v-model="css.fontSize"
                      show-input
                      :show-input-controls="false"
                      class="slider-col"
                    />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    透明度
                  </el-col>
                  <el-col :span="17">
                    <el-slider
                      v-model="css.fontSize"
                      show-input
                      :show-input-controls="false"
                      class="slider-col"
                    />
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="动画" name="second">
        动画
      </el-tab-pane>

      <el-tab-pane label="触发" name="three">
        动画
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'first',
      css: {
        fontFamily: '',
        fontSize: 16,
        color: '',
        backgroundColor: '',
        clickType: '',
        activeNames: [],
        width: 1,
        height: 1
      },
      properties: {
        content: ''
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleChange() {
      console.log('handleChange')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/config.scss";

.element-group-container {
  font-size: 14px;
  padding: 0 10px;
  color: #555;

  &.scroller-container{
    height: calc(100vh - 150px);
    overflow-y: scroll;
  }
  .row-item {
    padding: 5px 0;
  }
  .more-styles{
    padding-top:10px;
  }

  .divider {
    margin-top: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    color: #333;
    text-align: center;
    position: relative;
    .divider-inner-text {
      position: absolute;
      left: calc(50% - 52px);
      top: -10px;
      padding: 0 10px;
      background: #fff;
      font-size: 14px;
    }
  }
  .editor-btn{
    text-align: center;
    a{
      cursor: pointer;
      width: 25px;
      height: 24px;
      line-height: 24px;
      display: inline-block;
      &:hover,&.selected {
        background-color: $mainColor;
        color: #fff;
      }
    }
  }

}
</style>
<style lang="scss">
.element-cpm {
  .el-tabs {
    .el-tabs__item {
      font-size: 12px;
      &:nth-child(2) {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
  .el-input-number.is-without-controls.number-col2 .el-input__inner{
    padding: 0 2px;
  }

  .slider-col .el-slider__input{
    width:50px;
  }
  .slider-col .el-slider__runway.show-input{
    margin-right:65px;
  }

  .slider-col .el-input-number.is-without-controls .el-input__inner{
    padding:0 3px;
  }
}
</style>
