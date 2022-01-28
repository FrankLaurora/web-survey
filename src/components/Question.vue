<template>
    <div>
        <h2 class="h2 highlighted">{{$store.state.survey[$store.state.current].question}}</h2>
        <div class="answer_container" v-for="(answer, index) in $store.state.survey[$store.state.current].answers" 
            :key="index" 
            @click="$store.commit('addAnswer', {answer: index})"
            :class="($store.state.survey[$store.state.current].userAnswer == index) ? 'selected' : ''">
            <p>{{answer}}</p>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'Question'
}
</script>

<style lang="scss" scoped>
    .answer_container {
        width: 15rem;
        padding: 1rem 2rem;
        margin-block: 1rem;
        background-color: #cecece;
        color: rgb(6, 65, 47);
        border-radius: 0.4rem;
        border: 2px solid #cecece;
        font-weight: 500;
        transition: 0.2s;

        &:hover{
            cursor: pointer;
            background-color: rgb(14, 148, 108);
            border: 2px solid rgb(6, 65, 47);
            color: #fff;
        }
    }
    .selected{
        background-color: rgb(14, 148, 108);
        border: 2px solid rgb(6, 65, 47);
        color: rgb(255, 214, 80);
        box-shadow: 0 0 0.5rem rgb(6, 65, 47);

        &:hover {
            color: rgb(255, 214, 80);
        }
    }
</style>