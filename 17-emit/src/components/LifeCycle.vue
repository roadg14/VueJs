<template>
  <h1>Será que meu nome {{ texto }} {{ nome }}</h1>
  <Info :email="email"/>
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
      texto: "é",
      email: "douglasgc13@gmail.com" // Esse email o props ta chamando lá por que aqui no data está definindo.
      // quando não for colocado nada o props e no data estiver a mesma, ele vai chamar o do data.
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