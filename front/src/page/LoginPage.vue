<template>
    <div id="login-page" class="page">
        <img class="logo" width="40" src="../../public/logo.svg">
        <input type="text" v-model="id">
        <input type="password" v-model="pw">
        <button @click="login">로그인</button>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            id: null,
            pw: null,
        }
    },
    methods: {
        login() {
            this.axios.post("/login", {id: this.id, pw:this.pw})
            .then((response)=>{
                console.log(response);
            })
        }
    }
}
</script>

<style scoped>
.page {
    max-width: 400px;
    padding: 20px;
}
.logo {
    display: block;
    margin: auto;
}
</style>