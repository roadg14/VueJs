<template>
  <div>
    <p>{{email}}</p> <!-- Usando props, esta no arquivo Lifecycle.vue-->
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias para BackEnd:</p>
    <ul>
      <!-- Um impressão de lista de forma unica.-->
      <!-- Utilizando o V-FOR e V-BIND para imprimir a lista unica.-->
      <li v-for="(technology, index) in backend_tecnologies" v-bind:key="index">{{ technology }}</li>
    </ul>
      <p>Utilizo as seguintes tecnologias para FrontEnd:</p>
    <ul>
      <!-- Uma segunda forma de chama a lista unica! usando V-FOR e V-BIND-->
      <li v-for="technology in frontend_tecnologies" v-bind:key="technology.id"> 
        {{ technology.language }}
      </li>
    </ul>
    <div>
      <button @click="showEmail">{{ textoBotao }}</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: douglasgc13@gmail.com</p>
    <p class="teste">Para acessar meu portifólio <a v-bind:href="meu_link" target="_black">Basta clicar aqui</a></p>
    <Picture />
  </div>
</template>
<script>
import Picture from "./Picture.vue"

export default {
  name: 'Info',
  components: {
    Picture
  },
  props: { // Usando props, o email está la em <Info /> no arquivo LifeCycle.vue 
    email: String,
    //esta_trabalhando: Boolean
  },
  data() {
    return { 
      esta_trabalhando: true,
      mostrar_email: false,
      meu_link: "https://www.google.com", // v-bind -> marcar um texto com o link.
      // target="_black" -> faz abrir uma nova pagina quanto é clicado no link.
      textoBotao: 'Mostrar Gmail',
      backend_tecnologies: ['JavaScript', 'Php', 'Python'], // Usando para imprimir uma lista unica.
      frontend_tecnologies: [ // Imprimindo uma lista unica. com o v-for e v-bind. Uma segunda forma de chama tambem.
        {id: 1, language: 'Html'},
        {id: 2, language: 'Css'},
        {id: 3, language: 'Vue'}
      ] // Imprimindo uma lista unica. com o v-for e v-bind.
    }
  },
  methods: { // Methods serve para da funcionamento.
    showEmail() {
      this.mostrar_email = !this.mostrar_email
      if(!this.mostrar_email) { // Quando for clicado no bottão tambem vai alterar o texto.
        this.textoBotao = 'Mostra Gmail'
      } else {
        this.textoBotao = 'Esconder Gmail'
      }
    }
  }
}
</script>

<style>
  .paragrafo-pai {
    color: red;
  }
</style>