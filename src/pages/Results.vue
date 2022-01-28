<template>
    <div class="container">
        <h2 class="h2 highlighted">Risultati</h2>

        <h3 class="h3 highlighted">Hai risposto correttamente a {{score}} domand{{(score == 1) ? 'a' : 'e'}} su {{$store.state.survey.length}}</h3>

        <ol>
            <li v-for="(question, index) in $store.state.survey" :key="index">
                <h4 class="light">{{question.question}}</h4>
                <p :class="(question.correctAnswer == question.userAnswer) ? 'correct' : 'wrong'">
                    La risposta corretta è {{question.answers[question.correctAnswer]}}. 
                    {{(question.correctAnswer == question.userAnswer) ? 'La tua risposta è corretta.' : `La tua risposta, ${question.answers[question.userAnswer]}, è sbagliata.`}}
                </p>
            </li>
        </ol>

        <div class="btn_container">
            <a href="http://localhost:8080"><button class="btn">Torna al sondaggio</button></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Results',

    data() {
        return {
            score: 0
        }
    },

    mounted() {
        this.$store.state.survey.forEach(element => {
            if(element.userAnswer == element.correctAnswer) {
                this.score++
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.container{
    background-color: #ffffff32;
    border-radius: 0.4rem;

    li{
        padding: 0.5rem 1rem;
        background-color: #00000080;
        border-radius: 0.4rem;
    }

    p.correct{
        color: rgb(127, 255, 170);
    }

    p.wrong{
        color: rgb(255, 152, 152);
    }

    .btn_container{
        text-align: end;
        margin-top: 1rem;
        .btn {
            font-weight: 500;
            

            &:hover {
                background-color: rgb(8, 68, 92);
            }
        }
    }
}
</style>