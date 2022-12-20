<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
        <li v-if="esta_logado"><a href="#">Meu Perfil</a></li>
    </ul>
</template>

<script>
export default {
    name: "Header",
    props: ["esta_logado"] // isso é props
}
</script>

<style scoped> /* O scoped faz com que ele selecione oque estiver nesse arquivo.*/
    ul {
        list-style: none;
        display: flex;
        background-color: rgb(0, 0, 0);
    }

    li {
        margin-right: 10px;
    }

    a {
        color: #ddd;
        text-decoration: none;
        transition: .5s;
    }

    a:hover {
        color: turquoise;
    }
</style>