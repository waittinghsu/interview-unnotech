<template lang="pug">
    v-card(:flat="flat" :width="width" light nuxt :to="`/detail/${adapter.id}`")
        v-card-title.pa-2
            v-row(no-gutters)
                v-col.text-center(cols="12")
                    v-btn(depressed x-small color="transparent" fab @click.prevent="goDelete")
                        s-icon(icon="delete" size="24" color="gray")
        v-card-text.pa-0
            v-row.px-2(no-gutters)
                // span {{ adapter.author}}
                v-col.pb-4(cols="12")
                    v-sheet(elevation="0" height="72")
                        span.clamp3 {{ adapter.description}}
                v-col.text-truncate(cols="12")
                    span.caption by THe life! 2019-09-09
</template>

<script>
import { BookAdapter } from '@/components/Adapters';

export default {
    components: { BookAdapter, SIcon: () => import('@/components/SIcon') },
    props: {
        item: {
            type: Object,
            default: null
        },
        flat: {
            type: Boolean,
            default: false
        },
        status: {
            type: Boolean,
            default: false
        },
        width: {
            type: [String, Number],
            default: '100%'
        }
    },
    data: () => ({}),
    computed: {
        adapter() {
            return new BookAdapter(this.item);
        },
        structureFormat() {
            return this.$vuetify.breakpoint.mdAndUp
                ? null
                : '{room}房 {livingroom}廳 {bathroom}衛 {square}坪 {floors}樓';
        }
    },
    methods: {
        goDelete() {
            console.log('qwertyhjkjhgfd');
            this.$emit('delete', this.adapter.id);
        }
    }
};
</script>
