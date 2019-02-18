<template>
  <div class="element-box" :style="elestyle()" @click.stop.prevent="handleClickElement($event)">
    <div class="element-box-contents">
      <span>哈哈哈哈哈哈哈哈</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    el: {
      type: Object,
      default: () => {}
    },
    clickElement: {
      type: Function,
      default: () => {}
    }
  },
  created() {
    console.log('el-text')
    console.log(this.el)
  },
  methods: {
    handleClickElement($event) {
      console.log(this.el)
      this.clickElement($event, this.el.css)
    },
    elestyle() {
      const { left, top, width, height, rotateAngle } = this.el.css
      return {
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotateAngle}deg)`,
        left: `${left}px`,
        top: `${top}px`
      }
    }
  }
}
</script>
