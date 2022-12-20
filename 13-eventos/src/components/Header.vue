<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
</template>

<script>
export default {
    name: "Header"
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