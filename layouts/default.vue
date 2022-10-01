<template>
    <div class="safe-top safe-left safe-right safe-bottom mx-4">
        <div class="disable-scrollbars max-h-screen h-full overflow-y-scroll">
            <Nuxt />
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
.content {
    height: calc(100vh - 160px);
}
</style>
