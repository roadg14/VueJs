<template>
  <div>
    <Header />
    <PrimeiroComponente />
    <h3 class="paragrafo-pai">Testando o components {{ testando }}</h3>
    <LifeCycle />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Header
  },
  data() {
    return {
      testando: "Testado"
    }
  }
}
</script>

<style> /* CSS que vai ser usado em geral, no caso quando for usado no App.vue geral.*/
  body {
    background-color: #333;
    color: #fff;
  }

  a { /* Links */
    text-decoration: none;
  }

  .teste { /* A class está no Info.vue */
    background-color: rgb(17, 17, 17);
    color: rgb(255, 255, 255);
  }
</style>