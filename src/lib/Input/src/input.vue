<template>
<div class="wrapper" :class="{error}">
  <input type="text"
    :value="value"
    :disabled="disabled"
    :readonly="readonly"
    @blur="$emit('blur', $event.target.value)"
    @focus="$emit('focus', $event.target.value)"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)">
  <template v-if="error">
    <x-icon name="error" class="icon-error"></x-icon>
    <span class="error-message">{{error}}</span>
  </template>
</div>
</template>

<script>
import XIcon from '../../../lib/icon/src/index'
export default {
  components: {
    'x-icon': XIcon
  },
  name: 'XInput',
  props: {
    value: {
      type: String,
      default: ''
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
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 12px;
$box-shadow-color: inset 0 1px 3px #666;
$red: #f1453d;

.wrapper {
  font-size: $font-size;
  display: inline-block;
  align-items: center;

  >:not(:last-child) {
    margin-right: .5em;
  }

  >input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 6px 8px;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      outline: none;
      box-shadow: $box-shadow-color;
    }

    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }

  &.error {
    >input {
      border-color: $red;
    }

    .icon-error {
      fill: red;
    }

    .error-message {
      color: $red;
    }
  }
}
</style>
