<template>
  <div style="padding-top: 16px;">
    <x-row class="demoRow" gutter="10">
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
      <x-col span="8" offset="8">
        <div class="demoCol">8</div>
      </x-col>
    </x-row>
    <x-row class="demoRow" gutter="10">
      <x-col span="6" offset="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6" offset="6">
        <div class="demoCol">6</div>
      </x-col>
    </x-row>
    <x-row class="demoRow" gutter="10">
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4" offset="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4" offset="8">
        <div class="demoCol">4</div>
      </x-col>
    </x-row>
    <x-row class="demoRow" gutter="10">
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2" offset="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2" offset="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2" offset="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2" offset="2">
        <div class="demoCol">2</div>
      </x-col>
    </x-row>

  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import XRow from '../../../src/row'
import XCol from '../../../src/col'

export default {
  components: {XRow, XCol},
}
</script>