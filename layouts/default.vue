<template>
    <div id="app" class="safe-top safe-left safe-right safe-bottom mx-4">
        <div class="disable-scrollbars max-h-screen h-full overflow-y-scroll">


            <div class="app-header flex">
                <div class="text-left">
                    <button @click="routerBack()" v-if="$route.path !== '/'"
                        class="ph-arrow-bend-down-left btn p-1 rounded bg-white"></button>
                </div>
            </div>
            <div class="app-content">
                <Nuxt />
            </div>
            <div class="app-footer flex bg-dark text-white space-between">
                <button class="btn text-white"><i class="ph-magnifying-glass ft24" /></button>
                <button class="btn text-white" @click="moveUrl('/')"><i class="ph-house ft24" /></button>
                <button class="btn text-white" @click="moveUrl('/user/mypage')"><i class="ph-user ft24" /></button>
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
    height: 100vh;
}
.app-footer {
    height: 80px;
    padding: 0 24px;
    position: sticky;
    bottom: 0;
}
</style>
