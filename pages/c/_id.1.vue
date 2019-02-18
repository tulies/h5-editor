<template>
  <div class="editor-wordspace" @click="handelClickWorkspace">
    <div class="device-box">
      <div class="screen-box">
        <div class="element-items">
          <div class="element-box" :style="elestyle(el1)" @click.stop.prevent="handleClickElement($event,el1)">
            <div class="element-box-contents">
              <span>哈哈哈哈哈哈哈哈</span>
            </div>
          </div>

          <div class="element-box" :style="elestyle(el2)" @click.stop.prevent="handleClickElement($event,el2)">
            <div class="element-box-contents">
              <img class="element" src="../../assets/tysx.png">
            </div>
          </div>
        </div>

        <r-r-z
          v-if="showRRZ"
          :top="rrzdata.top"
          :left="rrzdata.left"
          :width="rrzdata.width"
          :height="rrzdata.height"
          :rotate-angle="rrzdata.rotateAngle"
          :aspect-ratio="false"
          :min-width="-Infinity"
          :min-height="-Infinity"
          zoomable="n, w, s, e, nw, ne, se, sw"
          :rotatable="true"
          :on-rotate-start="handleRotateStart"
          :on-rotate="handleRotate"
          :on-rotate-end="handleRotateEnd"
          :on-resize-start="handleResizeStart"
          :on-resize="handleResize"
          :on-resize-end="handleResizeEnd"
          :on-drag-start="handleDragStart"
          :on-drag="handleDrag"
          :on-drag-end="handleDragEnd"
        />
      </div>
      <div class="b bt" />
      <div class="b bb" />
      <div class="b bl" />
      <div class="b br" />
    </div>
  </div>
</template>
<script>
// import { tLToCenter } from '../../components/resizable-rotatable-draggable/utils'
import RRZ from '@/components/resizable-rotatable-draggable/index.vue'
export default {
  components: {
    RRZ
  },
  data() {
    return {
      showRRZ: false,
      rrzdata: {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        rotateAngle: 0
      },
      curEL: null,
      el1: {
        width: 200,
        height: 60,
        top: 50,
        left: 100,
        rotateAngle: 0
      },
      el2: {
        width: 100,
        height: 100,
        top: 200,
        left: 100,
        rotateAngle: 0
      }

    }
  },
  computed: {
    resizerstyle() {
      const { left, top, width, height, rotateAngle } = this.rrzdata
      return {
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotateAngle}deg)`,
        left: `${left}px`,
        top: `${top}px`
      }
    }
  },
  methods: {
    elestyle(d) {
      const { left, top, width, height, rotateAngle } = d
      return {
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotateAngle}deg)`,
        left: `${left}px`,
        top: `${top}px`
      }
    },
    // 点击工作区
    handelClickWorkspace(e) {
      // console.log(e.target.className)
      if (['screen-box', 'editor-wordspace'].includes(e.target.className)) {
        this.showRRZ = false
      }
    },
    // 点击页面元素
    handleClickElement(e, el) {
      this.curEL = el
      this.rrzdata = {
        ...this.curEL
      }
      console.log(el)
      console.log(this.curEL)
      this.showRRZ = true
    },
    handleResizeStart() {
      // console.log('ResizeStart')
    },
    handleResize({ top, left, width, height }, isShiftKey, type) {
      this.rrzdata.top = Math.round(top)
      this.rrzdata.left = Math.round(left)
      this.rrzdata.width = Math.round(width)
      this.rrzdata.height = Math.round(height)

      this.curEL.top = this.rrzdata.top
      this.curEL.left = this.rrzdata.left
      this.curEL.width = this.rrzdata.width
      this.curEL.height = this.rrzdata.height
    },
    handleResizeEnd() {
      // console.log('RotateEnd')
    },

    handleDragStart() {
      // console.log('DragStart')
    },
    handleDrag(deltaX, deltaY) {
      // console.log(deltaX, deltaY)
      this.rrzdata.left = this.rrzdata.left + deltaX
      this.rrzdata.top = this.rrzdata.top + deltaY

      this.curEL.top = this.rrzdata.top
      this.curEL.left = this.rrzdata.left
      // this.left = 300
    },
    handleDragEnd() {
      // console.log('RotateEnd')
    },
    handleRotateStart() {
      // console.log('RotateStart')
    },
    handleRotate(rotateAngle) {
      this.rrzdata.rotateAngle = rotateAngle
      this.curEL.rotateAngle = rotateAngle
    },
    handleRotateEnd() {
      // console.log('RotateEnd')
    }

  }
}
</script>
<style lang="scss" scoped>
.editor-wordspace{
  width: 100%;
  height:100vh;
  display:flex;
  align-items:center;/*垂直居中*/
  justify-content: center;/*水平居中*/
}
.device-box{
  // flex: 1;
  display:inline-block;
  padding: 30px 5px;
  background-color: #efefef;
  border-radius: 30px;
  position:relative;
  .b{
    position: absolute;
    z-index: 100;
    background-color: #efefef;
    &.bt{
      top: 0;
      left: 0;
      right: 0;
      height: 30px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;

    }
    &.bb{
      bottom: 0;
      left: 0;
      right: 0;
      height: 30px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    &.bl{
      top: 30px;
      left: 0;
      bottom: 30px;
      width: 6px;
    }
    &.br{
      top: 30px;
      bottom: 30px;
      right: 0;
      width: 6px;
    }
  }

  .screen-box{
    width: 320px;
    height: 480px;
    margin: 0 auto;
    background-color: #ffffff;
    position: relative;
  }
  .element-box{
    position: absolute;
    text-align: center;

    .element-box-contents{
      height: 100%;
      width: 100%;
      .element{
        min-width: 1px;
        min-height: 1px;
        color: inherit;
        height: 100%;
        width: 100%;
      }
    }
  }
}

</style>
