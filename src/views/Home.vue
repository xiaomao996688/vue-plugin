<template>
<div class="home">
  <!--  <x-button :loading="loading1" icon-position="left" @click="loading1 = !loading1"> 按钮</x-button>
  <x-button icon="settings" :loading="loading2" icon-position="left" @click="loading2 = !loading2"> 按钮</x-button>
  <x-button icon="settings" :loading="true" icon-position="left"> 我是按钮</x-button>
  <x-button icon="settings" :loading="true" icon-position="right"> 按钮</x-button>
  <x-button-group>
    <x-button icon="left" :loading="true" icon-position="right"> 上一页</x-button>
    <x-button> 更多</x-button>
    <x-button> 1</x-button>
    <x-button icon="right" :loading="true" icon-position="right"> 下一页</x-button>
  </x-button-group> -->
  <x-input :value="inputV1" />
  <x-input :value="inputV2" :disabled="true" />
  <x-input :value="inputV2" :readonly="true" />
  <x-input :value="inputV2" :error="'用户名错误'" />
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  data() {
    return {
      loading1: false,
      loading2: false,
      inputV1: '',
      inputV2: ''
    }
  }
}
</script>

<style lang="scss">

</style>
