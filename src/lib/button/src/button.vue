<template>
<button class="x-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
  <x-icon class="icon" v-if="icon && !loading" :name="icon"></x-icon>
  <x-icon class="loading icon" v-if="loading" name="Loading"></x-icon>
  <div class="content">
    <slot></slot>
  </div>
</button>
</template>

<script>
import XIcon from '../../icon/src/icon'
export default {
  name: 'XButton',
  components: {
    'x-icon': XIcon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'right',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  },
  created() {},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.x-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.x-button:hover {
  border-color: var(--border-color-hover);
}

.x-button:active {
  background-color: var(--button-active-bg);
}

.x-button:focus {
  outline: none;
}

.icon {
  height: 1em;
  width: 1em;
  order: 1;

}

.content {
  order: 2;
}

.icon-right {
  >.content {
    order: 1;
  }

  >.icon {
    order: 2;
    margin: 0;
    margin-left: .2em;
  }
}

.icon-left {
  >.content {
    order: 2;
  }

  >.icon {
    order: 1;
    margin: 0;
    margin-right: .2em;
  }
}

.loading {
  animation: spin 2s infinite linear;
}
</style>
