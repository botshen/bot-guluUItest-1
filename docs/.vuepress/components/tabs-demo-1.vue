<template>
  <div style="margin-top: 10px">
    <div>
      <x-tabs :selected="selected1">
        <x-tabs-head>
          <x-tabs-item name="1">标题一</x-tabs-item>
          <x-tabs-item name="2">标题二</x-tabs-item>
        </x-tabs-head>
        <x-tabs-body>
          <x-tabs-pane name="1">内容1</x-tabs-pane>
          <x-tabs-pane name="2">内容2</x-tabs-pane>
        </x-tabs-body>
      </x-tabs>
    </div>

    <div style="margin-top: 20px">
      <x-tabs :selected="selected2">
        <x-tabs-head>
          <x-tabs-item name="1">标题一</x-tabs-item>
          <x-tabs-item disabled name="2">标题二</x-tabs-item>
          <x-tabs-item name="3">标题三</x-tabs-item>
        </x-tabs-head>
        <x-tabs-body>
          <x-tabs-pane name="1">内容1</x-tabs-pane>
          <x-tabs-pane name="2">内容2</x-tabs-pane>
          <x-tabs-pane name="3">内容3</x-tabs-pane>
        </x-tabs-body>
      </x-tabs>
    </div>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'

export default {
  data() {
    return {
      selected1: '1',
      selected2: '1'
    }
  },
  components: {
    'x-tabs': Tabs,
    'x-tabs-head': TabsHead,
    'x-tabs-body': TabsBody,
    'x-tabs-item': TabsItem,
    'x-tabs-pane': TabsPane,
  }
}
</script>