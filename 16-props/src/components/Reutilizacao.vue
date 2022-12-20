<template>
    <div>
        <button @click="ativar">Clique aqui!</button>
        <span v-show="ativou">Ativado!</span>
    </div>
</template>

<script>
export default {
    name: "Reutilizacao",
    data() {
        return {
            ativou: false
        }
    },
    methods: {
        ativar() { // Dando Funcionamento e ativando
            this.ativou = !this.ativou // Fazendo muda para verdadeiro e ativando realmente.
        }
    }
}
</script>

<style scoped>
span {
  margin-left: 40px;
}
</style>