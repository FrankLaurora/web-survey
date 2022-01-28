import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    survey: [
      {
        question: 'Di quale stato fanno parte le isole Hawaii?',
        answers: ['Messico', 'Stati Uniti d\'America', 'Giappone'],
        disabled: true,
        userAnswer: null,
        correctAnswer: 1
      },
      {
        question: 'Quanti stati compongono gli Stati Uniti d\'America?',
        answers: ['50', '52', '45'],
        disabled: true,
        userAnswer: null,
        correctAnswer: 0
      },
      {
        question: 'In che anno è stata scritta la Costituzione italiana?',
        answers: ['1968','1861', '1948'],
        disabled: true,
        userAnswer: null,
        correctAnswer: 2
      },
      {
        question: 'Qual è il fiume più lungo d\'Italia?',
        answers: ['Po', 'Adige', 'Arno'],
        disabled: true,
        userAnswer: null,
        correctAnswer: 0
      },
      {
        question: 'Qual è l\'oceano più esteso del mondo?',
        answers: ['Atlantico', 'Indiano', 'Pacifico'],
        disabled: true,
        userAnswer: null,
        correctAnswer: 2
      }
    ],
    current: 0
  },
  mutations: {
    nextQuestion(state){
      if(state.current >= 0 && state.current < state.survey.length - 1){
        state.current++
      }
    },
    prevQuestion(state){
      if(state.current > 0 && state.current < state.survey.length){
        state.current--
      }
    },
    addAnswer(state, answer){
      state.survey[state.current].disabled = false
      state.survey[state.current].userAnswer = answer.answer
    }
  },
  actions: {
  },
  modules: {
  }
})
