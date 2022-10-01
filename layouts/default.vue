<template>
    <div class="safe-top safe-left safe-right safe-bottom mx-4">
        <div class="disable-scrollbars max-h-screen h-full overflow-y-scroll">
            <div class="app-header">
                <button class="btn font-bold">돌아가기</button>
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
