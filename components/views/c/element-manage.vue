<template>
  <div>
    <component :is="cmp" />
  </div>
</template>

<script>
import CmpText from './el-cmp/cmp-text'
import CmpImage from './el-cmp/cmp-image'

export default {
  components: {
    CmpText,
    CmpImage
  },
  data() {
    return {
      cmp: CmpText
    }
  }
}
</script>
