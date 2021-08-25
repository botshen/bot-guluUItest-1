<template>
  <div style="padding-top: 16px;">

    <x-button>默认按钮</x-button>
    <x-button icon="settings">默认按钮</x-button>
    <x-button :loading="true">默认按钮</x-button>


  </div>
</template>
<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'x-button': Button
    },
    data () {
      return {
        content: `
          <x-button>默认按钮</x-button>
          <x-button icon="settings">默认按钮</x-button>
          <x-button :loading="true">默认按钮</x-button>
          <x-button disabled>默认按钮</x-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>