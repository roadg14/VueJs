const MyNameApp = {
  data() {
    return {
      name: "",
      input_name: "" // Com esse input_name que está tambem no v-model no html, Agora estão ligados, se for digitado vai aparecer aqui.
    }
  },
  methods: { // Onde fica as função de aplicação
    submitForm(e) { // v-on:click="submitForm" -> vai ser resgatado aqui. quando for clicado.

      e.preventDefault(); // 

      console.log(this.input_name); // Vai ler quando for escrito o nome e será enviado para this.name = this.input_name.

      this.name = this.input_name; // o name vai receber oque foi escrito no input_name.

    }
  }
}

Vue.createApp(MyNameApp).mount('#app')