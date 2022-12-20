<template>
    <div>
        <h2>Meu formulário</h2>
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input type="text" v-model="name" placeholder="Nome">
            </div>
            <div>
                <input type="text" v-model="email" placeholder="Email">
            </div>
            <div>
                <button>Enviar</button>
            </div>
        </form>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
    </div>
</template>

<script>

export default {
    name: "Form",
    data() {
        return { // Vinculado ao v-model la no input.
            name: "",
            email: ""
        }
    },
    methods: {
        enviarFormulario(e) { // Para enviar formularios, 

            e.preventDefault();

            const name = this.name
            const email = this.email

            console.log("O nome é: " + name)
            console.log("O email é: " + email)
            console.log("Formulario Enviado!")
            
            // Ajax
            
            // Inserir no banco os dados.
        
        }
    }
}
</script>

<style>
p {
    margin: 20px
}

</style>