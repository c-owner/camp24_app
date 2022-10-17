<template>

    <div class="p-4">
        <div>메인</div>

    </div>

</template>

<script>
import dayjs from 'dayjs';

export default {
    name: 'MainPage',
    asyncData({ store, redirect, app }) {
        if (!store.state.user_key) {

            app.$alert.alert({
                title: '알림',
                content: '로그인이 필요합니다. <br/> 로그인 페이지로 이동합니다. <br/>',
                closeBtn: true,
                cancelBtn: true,
                reverseBtn: true,
                confirmText: '네. 이동합니다.',
                cancelText: '아니요, 조금 더 머무를게요. ',
                confirm: () => {
                    return redirect('/user/login');
                },
                cancel: () => {
                    return redirect('/');
                },
            });
        }
    },
    data() {
        return {
        }
    }
};
</script>
