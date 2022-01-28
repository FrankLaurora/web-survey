<template>
  <div class="container">
    <Question />
    <div class="btn_container">
      <button class="btn btn_primary" @click="$store.commit('prevQuestion')" :disabled="$store.state.current == 0"><i class="fas fa-chevron-left"></i></button>
      <button class="btn btn_primary" v-if="$store.state.current < $store.state.survey.length - 1" @click="$store.commit('nextQuestion')" :disabled="$store.state.survey[$store.state.current].disabled"><i class="fas fa-chevron-right"></i></button>
      <router-link v-else :to="{ name: 'results' }"><button class="btn btn_submit" :disabled="$store.state.survey[$store.state.current].disabled">Invia</button></router-link>
    </div>
  </div>
</template>

<script>
import Question from '../components/Question.vue'
export default {
    name: 'Survey',

    components: {
        Question
    }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: #ffffff32;
  border-radius: 0.4rem;

  .btn_container {
    text-align: end;
    margin-top: 1rem;

    .btn {
      margin-left: 1rem;
    }
  }
}
</style>