<template>
  <div class="wrapper">
    <div>
      <x-collapse :selected.sync="selectedTab" single>
        <x-collapse-item title="标题1" name="1">hello，你好呢。</x-collapse-item>
        <x-collapse-item title="标题2" name="2">你知道我在想你吗?</x-collapse-item>
        <x-collapse-item title="标题3" name="3">我在等你呀!</x-collapse-item>
      </x-collapse>
    </div>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
  data() {
    return {
      selectedTab: ['1']
    }
  },
  components: {
    'x-collapse': Collapse,
    'x-collapse-item': CollapseItem
  }
}
</script>
<style scoped>
.wrapper{
  margin-top: 10px;
}
</style>