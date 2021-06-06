<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
       :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuLuCol",
  data() {
    return {
      gutter: 0
    }
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  created() {
    console.log("col create")
  },
  mounted() {
    console.log("col mounted")
  }
}
</script>
<style scoped lang="scss">
.col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;
  margin: 0 10px;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
