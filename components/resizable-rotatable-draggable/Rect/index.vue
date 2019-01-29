<template>
  <div
    ref="dragdiv"
    class="resizer"
    :style="resizerstyle"
    @mousedown="startDrag($event)"
  >
    <div class="slot-container">
      <slot />
    </div>

    <div v-if="rotatable" class="rotate" @mousedown="startRotate">
      <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z"
          fill="#eb5648"
          fillRule="nonzero"
        />
      </svg>
    </div>

    <!-- <divonMouseDown={e => this.startResize(e, cursor)} /> -->
    <div
      v-for="d in direction"
      :key="`a${d}`"
      :style="getStyle(d)"
      :class="`${zoomableMap[d]} resizable-handler`"
      @mousedown="startResize($event,d)"
    />
    <div v-for="d in direction" :key="`b${d}`" :class="`${zoomableMap[d]} square`" />
  </div>
</template>
<script>
import { getLength, getAngle, getCursor } from '../utils'

export default {
  props: {
    styles: { type: Object, default: null },
    zoomable: { type: String, default: '' },
    rotatable: { type: Boolean },
    onResizeStart: { type: Function, default: null },
    onResize: { type: Function, default: null },
    onResizeEnd: { type: Function, default: null },
    onRotateStart: { type: Function, default: null },
    onRotate: { type: Function, default: null },
    onRotateEnd: { type: Function, default: null },
    onDragStart: { type: Function, default: null },
    onDrag: { type: Function, default: null },
    onDragEnd: { type: Function, default: null },
    parentRotateAngle: { type: Number, default: 0 }
  },
  data() {
    return {
      zoomableMap: {
        'n': 't',
        's': 'b',
        'e': 'r',
        'w': 'l',
        'ne': 'tr',
        'nw': 'tl',
        'se': 'br',
        'sw': 'bl'
      },
      direction: [],
      style: {}
    }
  },
  computed: {
    resizerstyle() {
      const {
        styles: {
          position: { centerX, centerY },
          size: { width, height },
          transform: { rotateAngle }
        }
      // rotatable,
      // parentRotateAngle
      } = this
      return {
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotateAngle}deg)`,
        left: `${centerX - Math.abs(width) / 2}px`,
        top: `${centerY - Math.abs(height) / 2}px`
      }
    }
  },
  mounted() {
    this.$element = this.$refs.dragdiv
    const { zoomable } = this
    this.direction = zoomable.split(',').map(d => d.trim()).filter(d => d) // TODO: may be speed up
  },
  methods: {
    // Drag
    startDrag(e) {
      let { clientX: startX, clientY: startY } = e
      this.onDragStart && this.onDragStart()
      this._isMouseDown = true
      const onMove = (e) => {
        if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
        e.stopImmediatePropagation()
        const { clientX, clientY } = e
        const deltaX = clientX - startX
        const deltaY = clientY - startY
        this.onDrag(deltaX, deltaY)
        startX = clientX
        startY = clientY
      }
      const onUp = () => {
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onUp)
        if (!this._isMouseDown) return
        this._isMouseDown = false
        this.onDragEnd && this.onDragEnd()
      }
      document.addEventListener('mousemove', onMove)
      document.addEventListener('mouseup', onUp)
    },

    // Rotate
    startRotate(e) {
      if (e.button !== 0) return
      const { clientX, clientY } = e
      const { styles: { transform: { rotateAngle: startAngle } } } = this
      const rect = this.$element.getBoundingClientRect()
      const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      }
      const startVector = {
        x: clientX - center.x,
        y: clientY - center.y
      }
      this.onRotateStart && this.onRotateStart()
      this._isMouseDown = true
      const onMove = (e) => {
        if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
        e.stopImmediatePropagation()
        const { clientX, clientY } = e
        const rotateVector = {
          x: clientX - center.x,
          y: clientY - center.y
        }
        const angle = getAngle(startVector, rotateVector)
        this.onRotate(angle, startAngle)
      }
      const onUp = () => {
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onUp)
        if (!this._isMouseDown) return
        this._isMouseDown = false
        this.onRotateEnd && this.onRotateEnd()
      }
      document.addEventListener('mousemove', onMove)
      document.addEventListener('mouseup', onUp)
    },
    // Resize
    startResize(e, d) {
      if (e.button !== 0) return

      const { styles: { transform: { rotateAngle } }, parentRotateAngle } = this
      const cursor = `${getCursor(rotateAngle + parentRotateAngle, d)}-resize`

      document.body.style.cursor = cursor
      const { styles: { position: { centerX, centerY }, size: { width, height } } } = this

      const { clientX: startX, clientY: startY } = e
      const rect = { width, height, centerX, centerY, rotateAngle }
      const type = e.target.getAttribute('class').split(' ')[ 0 ]
      this.onResizeStart && this.onResizeStart()
      this._isMouseDown = true
      const onMove = (e) => {
        if (!this._isMouseDown) return // patch: fix windows press win key during mouseup issue
        e.stopImmediatePropagation()
        const { clientX, clientY } = e
        const deltaX = clientX - startX
        const deltaY = clientY - startY
        const alpha = Math.atan2(deltaY, deltaX)
        const deltaL = getLength(deltaX, deltaY)
        const isShiftKey = e.shiftKey
        this.onResize(deltaL, alpha, rect, type, isShiftKey)
      }

      const onUp = () => {
        document.body.style.cursor = 'auto'
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onUp)
        if (!this._isMouseDown) return
        this._isMouseDown = false
        this.onResizeEnd && this.onResizeEnd()
      }
      document.addEventListener('mousemove', onMove)
      document.addEventListener('mouseup', onUp)
    },
    getStyle(d) {
      const { styles: { transform: { rotateAngle } }, parentRotateAngle } = this
      const cursor = `${getCursor(rotateAngle + parentRotateAngle, d)}-resize`
      return { cursor }
    }
  }
}
</script>
<style lang="scss" scoped>
.slot-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  word-break: break-all;
  text-align: center;
}
.slot-container img{
  width: 100%;
  height: 100%;
}
</style>
