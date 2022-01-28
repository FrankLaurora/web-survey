<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Question from './components/Question.vue'

export default {
  name: 'App',
  components: {
    Question
  }
}
</script>

<style lang="scss">
@import './assets/style/common.scss';
</style>