<template>
  <div class="element-cpm">
    <el-tabs v-model="activeName" class="element-tabs" :stretch="true" @tab-click="handleClick">
      <el-tab-pane class="element-tab-pane" label="样式" name="first">
        <div class="element-group-container scroller-container">
          <el-row class="row-item" type="flex" align="middle">
            <el-col :span="12">
              <div class="cover" />
            </el-col>
            <el-col :span="12">
              <el-row type="flex" style="margin-bottom:10px;">
                <el-col style="padding-left:10px;">
                  <el-button>
                    <i class="sceneiconfont sceneicon-zhihuan" />
                    更换图片
                  </el-button>
                </el-col>
              </el-row>
              <el-row type="flex">
                <el-col style="padding-left:10px;">
                  <el-button>
                    <i class="sceneiconfont sceneicon-tailor" />
                    裁剪图片
                  </el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <el-row class="row-item" type="flex" align="middle">
            <el-col :span="7">
              背景颜色
            </el-col>
            <el-col :span="17">
              <el-color-picker v-model="backgroundColor" />
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
              <el-select v-model="clickType" placeholder="无">
                <el-option key="无" label="无" value="无" />
                <el-option key="跳转连接" label="跳转连接" value="跳转连接" />
                <el-option key="跳转页面" label="跳转页面" value="跳转页面" />
                <el-option key="拨打电话" label="拨打电话" value="拨打电话" />
              </el-select>
            </el-col>
          </el-row>
          <div class="more-styles">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="边框" name="1">
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    边框样式
                  </el-col>
                  <el-col :span="17">
                    <el-select v-model="clickType" placeholder="无">
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
                    <el-color-picker v-model="color" />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    边框尺寸
                  </el-col>
                  <el-col :span="17">
                    <el-input-number
                      v-model="fontSize"
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
                      v-model="fontSize"
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
                      v-model="fontSize"
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
                    <el-color-picker v-model="color" />
                  </el-col>
                </el-row>
                <el-row class="row-item" type="flex" align="middle">
                  <el-col :span="7">
                    阴影大小
                  </el-col>
                  <el-col :span="17">
                    <el-input-number
                      v-model="fontSize"
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
                      v-model="fontSize"
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
                      v-model="fontSize"
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
                      v-model="width"
                      :controls="false"
                      :min="0"
                      :max="1000"
                      style="width:50px;"
                      class="number-col2"
                    />
                    <span>高：</span><el-input-number
                      v-model="height"
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
                      v-model="width"
                      :controls="false"
                      :min="0"
                      :max="1000"
                      style="width:50px;"
                      class="number-col2"
                    />
                    <span>Y：</span><el-input-number
                      v-model="height"
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
                      v-model="fontSize"
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
                      v-model="fontSize"
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
      input21: '',
      fontFamily: '',
      fontFamilyOptions: [
        {
          value: '默认字体',
          label: '默认字体'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      fontSize: 16,
      color: '',
      backgroundColor: '',
      clickType: '',
      activeNames: [],
      width: 1,
      height: 1
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

  .cover{
    width: 118px;
    height: 100px;
    border: 1px dashed #eee;
    background-image: url("http://res1.eqh5.com/o_1d1l87cve111bggdh4qltlk679.jpg?imageMogr2/auto-orient|imageMogr2/auto-orient/crop/!492x386a63a24");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
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
