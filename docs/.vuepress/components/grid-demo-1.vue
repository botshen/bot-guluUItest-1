<template>
  <div>
    <x-row class="demoRow">
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
    </x-row>
    <x-row class="demoRow">
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
    </x-row>
    <x-row class="demoRow">
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
    </x-row>
    <x-row class="demoRow">
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
    </x-row>
  </div>
</template>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components:{
    'x-row':Row,
    'x-col':Col,
  }
}
</script>

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