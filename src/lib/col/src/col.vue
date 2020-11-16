<template>
  <div class="col" ></div>
</template>
<script>
export default {
  name: 'XCol'
}
</script>
<style lang="scss" scoped>
  .col {
    height: 100px;
    background-color: green;
    border:1px solid red;
    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
</style>
