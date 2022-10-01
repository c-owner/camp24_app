<template>
    <ion-page>
        <ion-content class="content">
            <div>

            </div>
            <div class="bottom_btn_wrap ion-margin-bottom">
                <ion-button href="/user/login" expand="block">로그인</ion-button>
                <ion-button href="/user/register" expand="block">회원가입</ion-button>
            </div>

        </ion-content>
    </ion-page>
</template>

<script>

export default {
    name: 'IndexPage',
    data() {
        return {

        }
    }
};
</script>

<style>
.content {
    height: 100vh;
}
.bottom_btn_wrap {
    position: absolute;
    bottom: 80px;
    width: 100%;

}
</style>
