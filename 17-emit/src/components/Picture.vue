<template>
    <div>
        <img :src="avatar" :alt="descricao"> <!-- Esse trasinho antes do src -> :src é a mesma coisa do v-bind -->
        <MudarImagem @mudar-imagem="TrocarImagem"/>
    </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue';

export default {
    name: "Picture",
    components: {
        MudarImagem
    },
    data() {
        return {
            avatar: "/img/avatar.png", // :src -> os tracinhos antes para pode chamar assim -> :src
            descricao: "Douglas Rodrigues"
        }
    },
    methods: {
        TrocarImagem() {
            this.avatar = "/img/avatar2.png"
        }

        
    }
}
</script>              