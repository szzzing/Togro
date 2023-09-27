<template>
    <div id="login-page" class="page">
        <img class="logo" width="40" src="../../public/logo.svg">
        <img class="kakao" src="../assets/kakao_button.png" @click="clickKakaoLogin">
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
        clickKakaoLogin() {
            const client_id = process.env.VUE_APP_KAKAO_NATIVE_APP_KEY;
            const redirect_uri = process.env.VUE_APP_KAKAO_REDIRECT_URI;
            const response_type = "code";

            window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`;
        },
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
    margin-bottom: 24px;
}
.kakao {
    margin: auto;
    display: block;
}
</style>