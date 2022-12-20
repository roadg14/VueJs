<template>
  <div>
    <Header :esta_logado="true"/> <!-- Isso é props, está em Header.vue-->
    <PrimeiroComponente />
    <h3 class="paragrafo-pai">Testando o components {{ testando }}</h3>
    <LifeCycle />
    <Form />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Header,
    Form
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