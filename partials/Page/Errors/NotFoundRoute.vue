<template lang="pug">
    v-container(fill-height fluid justify="center" align="center")
        app-bar(hide-on-scroll)
            v-btn(text color="white" slot="left" nuxt to="/") back
        v-row(dense)
            v-col.text-center(cols="12" justify="center")
                h1.title {{ error.statusCode }}
            v-col.text-center(cols="12" justify="center")
                h2.body-1 {{ errorText[error.statusCode] }}
            v-col.text-center(cols="12" justify="center")
                v-btn(outlined color="primary" href="/") 前往首頁
            //v-col {{ $route }}
</template>
<script>
import AppBar from '@/components/AppBar/AppBar';
import IsMountedMixin from '@/mixins/IsMountedMixin';

export default {
    components: { AppBar },
    mixins: [IsMountedMixin],
    props: {
        error: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        errorText: {
            500: '內部伺服器錯誤。別擔心，我們正在處理中！',
            401: '您未授權讀取此頁面',
            403: '禁止存取，您沒有權限訪問此網站',
            404: '此頁面不存在',
            unknown: '發生錯誤，我們將盡快恢復',
            fixed: '系統維護中，我們將盡快恢復'
        }
    }),
    computed: {}
};
</script>
