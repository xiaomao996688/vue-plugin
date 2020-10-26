<template>
<svg class="x-icon">
  <use :xlink:href="`#i-${name}`"> </use>
</svg>
</template>

<script>
export default {
  name: 'XIcon',
  props: ['name']
}
</script>

<style lang="scss" scoped>
.x-icon {
  width: 1em;
  height: 1em;
}
</style>
