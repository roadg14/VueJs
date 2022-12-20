<template>
       <img :src="avatar" :alt="descricao"> <!-- Esse trasinho antes do src -> :src é a mesma coisa do v-bind -->
</template>

<script>
export default {
    name: "Picture",
    data() {
        return {
            avatar: "/img/avatar.png", // :src -> os tracinhos antes para pode chamar assim -> :src
            descricao: "Douglas Rodrigues"
        }
    }
}
</script>              