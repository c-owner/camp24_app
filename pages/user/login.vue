<template>
    <div>
<!--        로그인 화면-->
        <h2>로그인 페이지</h2>
        <div>회원가입
            <button @click="moveUrl('/user/register')"
                    class="btn btn-dark">회원가입</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    methods: {
        moveUrl(url) {
            this.$router.push(url);
        }
    },
}
</script>

<style scoped>

</style>
