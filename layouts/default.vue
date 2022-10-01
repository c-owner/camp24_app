<template>
    <ion-app>
        <ion-page>
            <ion-header>
                <ion-toolbar class="toolbar-md-primary">
                    <ion-title><button @click="lastBack();">돌아가기</button> 캠핑24</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="content">
                <nuxt/>
            </ion-content>
            <ion-fotter class="footer">
                <div class="bottom_btn_wrap ion-margin-bottom">
                    <ion-button href="/user/login" expand="block">로그인</ion-button>
                    <ion-button href="/user/register" expand="block">회원가입</ion-button>
                </div>
            </ion-fotter>
        </ion-page>
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


<style>
.content {
    height: calc(100vh - 160px);
}
</style>
