<template>
  <div class="wrapper" :class={error}>
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
           :placeholder="placeholder"
    >
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script lang="ts">
import Icon from './icon.vue';

export default {
  components: {Icon},
  name: 'GuluInput',
  props: {
    placeholder:{
      type:String
    },
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #F1453D;
.wrapper {display: inline-flex;font-size: $font-size;
  > :not(:last-child) {margin-right: .5em}
  align-items: center;
  > input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;
    padding: 0 8px;font-size: inherit;
    &:hover {border-color: $border-color-hover;}
    &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
    &[disabled], &[readonly] {border-color: #ccc;color: #ccc;cursor: not-allowed;}
  }
  &.error {
    > input {border-color: $red;}
  }
  .icon-error {fill: $red;}
  .errorMessage {color: $red;}
}
</style>
