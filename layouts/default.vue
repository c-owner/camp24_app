<template>
    <div id="app" class="safe-top safe-left safe-right safe-bottom mx-4">
        <div class="disable-scrollbars max-h-screen h-full overflow-y-scroll">


            <div class="app-header flex">
                <div class="text-left">
                    <button @click="routerBack()" v-if="$route.path !== '/'"
                        class="ph-arrow-bend-down-left btn p-1 rounded bg-white"></button>
                </div>
                <button @click="moveUrl('/user/register')" v-if="$route.path !== '/user/register'"
                    class="btn btn-dark">회원가입</button>
                <button @click="moveUrl('/user/login')" v-if="$route.path !== '/user/login'"
                    class="btn btn-dark">로그인</button>

            </div>
            <div class="app-content">
                <Nuxt />
            </div>
            <div class="app-footer">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DefaultLayout',
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        routerBack() {
            if (this.$route.path === '/') {
                this.$toast.show("한번 더 누르면 종료됩니다.");
                return;
            }
            this.$router.back();
        },
        moveUrl(url) {
            this.$router.push(url);
        }
    },
    watch: {
    },
}
</script>


<style>
.app-header {
    padding: 0 24px;
}
.app-content {
    height: calc(100vh - 160px);
}
</style>
