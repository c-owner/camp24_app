<template>
    <ion-app>
        <ion-header>
            <ion-toolbar class="toolbar-md-primary">
                <ion-title><button @click="lastBack();">돌아가기</button> 캠핑24</ion-title>
            </ion-toolbar>
        </ion-header>
        <nuxt/>
    </ion-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            currentPath: '/',
        }
    },
    mounted() {
        this.currentPath = this.$route.path;
    },
    methods: {
        lastBack() {
            if (this.$route.path === '/') {
                this.$toast.show("한번 더 누르면 종료됩니다.");
            } else {
                this.$router.back();
            }
        }
    },
    watch: {
        "$route.path"(newValue, oldValue) {
            console.log(newValue)
            this.currentPath = newValue;
        }
    },
}
</script>
