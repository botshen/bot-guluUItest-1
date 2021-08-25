<template>
  <div style="padding-top: 16px;">

    <x-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <x-sider style=" background:#ddd; width:200px; color: black;">
        sider
      </x-sider>
      <x-layout>
        <x-header style="height: 50px; background:#9E91F2;">
          header
        </x-header>
        <x-content style="height: 100px; background:#7B62D9;">
          content
        </x-content>
        <x-footer style="height: 50px; background:#9E91F2;">
          footer
        </x-footer>
      </x-layout>
    </x-layout>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import XLayout from '../../../src/layout'
import XHeader from '../../../src/header'
import XFooter from '../../../src/footer'
import XContent from '../../../src/content'
import XSider from '../../../src/sider'

export default {
  components: {XLayout, XHeader, XFooter, XContent, XSider},
}
</script>