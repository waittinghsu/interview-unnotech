<template lang="pug">
    v-content.overflow-scrolling-touch.overflow-y-auto#scroll-container.gray.lighten-4(v-scroll:#scroll-container="onScroll")
        app-bar(hide-on-scrol fluid)
            v-btn(text color="white" slot="left" nuxt to="/") back
            .white--text.text-truncate.text-center(slot="medium")
                span.text-truncate.white--text Detail
            v-btn(text color="white" slot="right" nuxt :to="`/create/${bookInfo.id}`") edit
        v-container.px-2.py-1(fluid)
            v-row(dense)
                v-col.text-truncate(cols="6")
                    span.caption author: {{ bookInfo.author}}
                v-spacer
                v-col(cols="auto")
                    span.caption {{ bookInfo.publicationDate | dayjs('YYYY-MM-DD') }}
                v-col(cols="12")
                    span {{ bookInfo.description }}
</template>

<script>
import { Scroll } from 'vuetify/lib/directives';
import dayjs from 'dayjs';
import { book } from '@/apis';
import { BookAdapter } from '@/components/Adapters';

export default {
    components: {
        AppBar: () => import('@/components/AppBar/AppBar'),
        SIcon: () => import('@/components/SIcon')
    },
    directives: { Scroll },
    auth: false,
    head: {
        title: '創順科技'
    },
    data: () => ({}),
    computed: {},
    async asyncData({ $axios, params }) {
        const bookInfo = new BookAdapter(
            await book($axios).get({
                id: params.id
                // id: '06c7f345-5d7a-4c83-a2a0-f3377b600003'
            })
        );
        // console.log('detail asyncData', bookInfo);
        return { bookInfo };
    },
    methods: {
        onScroll(o) {
            // this.$nuxt.$emit('MENU_CLOSE');
            // console.log(o);
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
