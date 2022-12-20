<template>
  <h1>Será que meu nome {{ texto }} {{ nome }}</h1>
  <Info />
</template>

<script>
import Info from './Info.vue'

export default {
  name: 'LifeCycle',
  components: {
    Info
  },
  data() {
    return {
      nome: "Guilherme ?",
      texto: "é"
    }
  },
  created() {
    setTimeout(() => {
      this.texto = "ou é"
    }, 5000)

    setTimeout(() => {
      this.nome = "Thiago ?"
    }, 5000)

    this.LifeCycle() // Cchamando la do methods: que vai mostrar no console executando.
    
  },
  mounted() {
    setTimeout(() => {
      this.texto = "ou"
    }, 10000)

    setTimeout(() => {
      this.nome = "Douglas ?"
    }, 10000)

    
  },
  methods: {
    LifeCycle() {
      console.log("Executou!") // Para mostra no console execunando 
    }
  }
}
</script>