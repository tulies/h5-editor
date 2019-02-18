<template>
  <component :is="elcmp" :el="el" :click-element="clickElement" />
</template>

<script>
import ElText from './el-text.vue'
export default {
  components: {
    ElText
  },
  props: {
    el: {
      type: Object,
      default: () => { return {} }
    },
    clickElement: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      // elcmp: ElText
    }
  },
  computed: {
    elcmp() {
      // if(this.el)
      return ElText
    }
  },
  created() {
    console.log('2134')
    console.log(this.el)
  }
}
</script>
