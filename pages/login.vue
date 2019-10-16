<template lang="pug">
    v-content
        v-container(fluid tap="section" fill-height)
            v-row(no-gutters justify="center" align="center")
                v-col(cols="12" md4 text-center)
                    h1 跟著 順創 翻轉世界
                    span.text-center 現在立馬登入，才能享有 順創 完整服務體驗。都說這麼心動了，你還在等什麼呢? 趕快加入我們吧!
                v-col(cols="auto" text-xs-center)
                    v-btn(@click="login") 登入
</template>

<script>
export default {
    layout: 'bottom-navigation',
    head: {
        title: '用戶登入'
    },
    components: {},
    data: () => ({}),
    methods: {
        login() {
            this.$nuxt.$emit('LOGIN_OR_REGISTER');
        }
    }
};
</script>
