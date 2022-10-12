<template>
    <div>
    </div>
</template>

<script>
export default {
    name: "MyPage",
    asyncData({ store, redirect }) {
        if (!store.state.user_key) {
            return redirect('/user/login');
        }
    },
}
</script>

<style scoped>

</style>
