<template>
  <rect-rect
    :styles="styles"
    :zoomable="zoomable"
    :rotatable="Boolean(rotatable && onRotate)"
    :parent-rotate-angle="parentRotateAngle"
    :on-resize-start="onResizeStart"
    :on-resize="handleResize"
    :on-resize-end="onResizeEnd"
    :on-rotate-start="onRotateStart"
    :on-rotate="handleRotate"
    :on-rotate-end="onRotateEnd"
    :on-drag-start="onDragStart"
    :on-drag="handleDrag"
    :on-drag-end="onDragEnd"
  >
    <slot />
  </rect-rect>
</template>
<script>
import { centerToTL, tLToCenter, getNewStyle, degToRadian } from './utils'

import RectRect from './Rect/index.vue'

export default {
  components: {
    RectRect
  },
  props: {
    left: { type: Number, default: 0 },
    top: { type: Number, default: 0 },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    rotatable: { type: Boolean, default: true },
    rotateAngle: { type: Number, default: 0 },
    parentRotateAngle: { type: Number, default: 0 },
    zoomable: { type: String, default: '' },
    minWidth: { type: Number, default: 10 },
    minHeight: { type: Number, default: 10 },
    aspectRatio: { type: [Number, Boolean], default: false },
    // Event
    onRotateStart: { type: Function, default: null },
    onRotate: { type: Function, default: null },
    onRotateEnd: { type: Function, default: null },
    onResizeStart: { type: Function, default: null },
    onResize: { type: Function, default: null },
    onResizeEnd: { type: Function, default: null },
    onDragStart: { type: Function, default: null },
    onDrag: { type: Function, default: null },
    onDragEnd: { type: Function, default: null }
  },
  data() {
    return {
    }
  },
  computed: {
    styles() {
      const { top, left, width, height, rotateAngle } = this
      // console.log('computed styles', { top, left, width, height, rotateAngle })
      // console.log('computed styles', tLToCenter({ top, left, width, height, rotateAngle }))
      return tLToCenter({ top, left, width, height, rotateAngle })
    }
  },
  methods: {
    handleRotate(angle, startAngle) {
      if (!this.onRotate) return
      let rotateAngle = Math.round(startAngle + angle)
      if (rotateAngle >= 360) {
        rotateAngle -= 360
      } else if (rotateAngle < 0) {
        rotateAngle += 360
      }
      if (rotateAngle > 356 || rotateAngle < 4) {
        rotateAngle = 0
      } else if (rotateAngle > 86 && rotateAngle < 94) {
        rotateAngle = 90
      } else if (rotateAngle > 176 && rotateAngle < 184) {
        rotateAngle = 180
      } else if (rotateAngle > 266 && rotateAngle < 274) {
        rotateAngle = 270
      }
      this.onRotate(rotateAngle)
    },
    handleResize(length, alpha, rect, type, isShiftKey) {
      if (!this.onResize) return
      const { rotateAngle, aspectRatio, minWidth, minHeight, parentRotateAngle } = this
      const beta = alpha - degToRadian(rotateAngle + parentRotateAngle)
      const deltaW = length * Math.cos(beta)
      const deltaH = length * Math.sin(beta)
      const ratio = isShiftKey && !aspectRatio ? rect.width / rect.height : aspectRatio
      const {
        position: { centerX, centerY },
        size: { width, height }
      } = getNewStyle(type, { ...rect, rotateAngle }, deltaW, deltaH, ratio, minWidth, minHeight)

      this.onResize(centerToTL({ centerX, centerY, width, height, rotateAngle }), isShiftKey, type)
    },
    handleDrag(deltaX, deltaY) {
      this.onDrag && this.onDrag(deltaX, deltaY)
    }
  }
}
</script>

<style>
.rect-container{
  /* height: 500px;
  width: 1000px; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
