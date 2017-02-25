<template>
  <div id="app" class="app-wrapper">
    <router-link :to="{path: 'remon'}"> 推荐</router-link>
    <router-link :to="{path: 'toplist'}"> 排行榜</router-link>
    <router-link :to="{path: 'search'}"> 搜索</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
 import {setHtmlSize} from 'common/js/utils'

  export default {
    name: 'app',
    created() {
      this.$nextTick(() => {
        setHtmlSize()
      })
    },
    mounted() {
      window.onresize = () => {
        setHtmlSize()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import 'common/css/computed.styl';

  .app-wrapper
    r1(font-size, 15)
    r1(padding, 20)
</style>
