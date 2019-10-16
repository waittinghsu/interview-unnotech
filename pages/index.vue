<template lang="pug">
    v-content.overflow-scrolling-touch.overflow-y-auto#scroll-container.gray.lighten-4(v-scroll:#scroll-container="onScroll")
        app-bar(hide-on-scrol fluid)
            v-btn(text slot="right" nuxt to="/create") New
        v-container.px-2.py-1(fluid)
            v-row(dense)
                v-col(v-for="(item, index) in books" :key="'t_' + index" cols="6" md="4" lg="2")
                    Vertical(:item="item")
</template>

<script>
import { Scroll } from 'vuetify/lib/directives';
import Vertical from '@/components/Cards/Vertical';
import { book } from '@/apis';
import { DialogBase } from '@/partials/Dialog';
import { BOOKS_URI, BOOKS_ATTACH_URI, BOOKS_DETACH_URI } from '@/apis/uri';

export default {
    components: {
        AppBar: () => import('@/components/AppBar/AppBar'),
        DialogBase,
        Vertical
    },
    directives: { Scroll },
    auth: false,
    head: {
        title: '創順科技'
    },
    data: () => ({
        deleteActive: false,
        id: ''
    }),
    computed: {},
    async asyncData({ $axios, query }) {
        const params = {
            'order[author]': 'desc'
        };

        const books = await book($axios).query({ params });
        // console.log('asyncData', query, books);
        return { books };
    },
    methods: {
        onScroll(o) {
            // this.$nuxt.$emit('MENU_CLOSE');
            // console.log(o);
        },
        goDelete() {
            // console.log('params index', params, urlText.toString());
        }
    }
};
</script>
<style>
.clamp3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
