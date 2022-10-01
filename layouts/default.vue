<template>
    <div class="safe-top safe-left safe-right safe-bottom mx-4">
        <div class="disable-scrollbars max-h-screen h-full overflow-y-scroll">
            <div class="app-header">
                <button @click="routerBack()" v-if="$route.path !== '/'"
                    class="ph-arrow-bend-down-left text-sm font-bold px-2 py-2 rounded hover:shadow-lg "></button>
                <button @click="moveUrl('/user/register')" v-if="$route.path !== '/user/register'"
                    class="bg-gray-700 text-white active:bg-black text-sm font-bold px-2 py-2 rounded shadow hover:shadow-lg ">회원가입</button>
                <button @click="moveUrl('/user/login')" v-if="$route.path !== '/user/login'"
                    class="bg-gray-700 text-white active:bg-black text-sm font-bold px-2 py-2 rounded shadow hover:shadow-lg ">로그인</button>

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
.app-content {
    height: calc(100vh - 160px);
}
</style>
