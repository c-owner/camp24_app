<template>

    <div class="p-4">
        <div>메인</div>

    </div>

</template>

<script>

export default {
    name: 'MainPage',
    asyncData({ store, redirect }) {
        if (!store.state.user_key) {
            alert('로그인이 필요합니다. 마이페이지로 이동합니다.');
            return redirect('/user/login');
        }
    },
    data() {
        return {}
    }
};
</script>
