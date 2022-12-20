<template>
   <div> <!-- Ativando as funções com o @click -->
    <button @click="primeiro(txt1,$event), segundo(txt2,$event), terceiro()">Ativar mútiplos eventos</button>
    <p>{{ multiplos_eventos }}</p>
   </div> 
</template>

<script>
export default {
    name: "MultiplosEventos",
    data() {
        return {
            multiplos_eventos: "",
            txt1: "Iae Gay",
            txt2: "Flow Gay"
        }
    },
    methods: { // Ativando varias funções ao mesmo tempo.
        primeiro(txt, e) {
            e.preventDefault();
            this.multiplos_eventos = txt
        },
        segundo(txt, e) {
            e.preventDefault();
            setTimeout(() => this.multiplos_eventos = txt, 1000)
            
        },
        terceiro() {
            setTimeout(() => this.multiplos_eventos = "", 2000)
        }
    }
}
</script>

<style scoped>
div {
    margin: 40px;
}
</style>