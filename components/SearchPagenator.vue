<template lang="pug">
    v-btn(color="primary" :disable="hasNext" outlined large :loading="false" @click="next") {{ more }}
</template>
<script>
import { SEARCH_URI } from '@/apis/uri';

const meta = {
    current_page: 1,
    from: 0,
    last_page: 1,
    path: null,
    per_page: 20,
    to: 0,
    total: 0
};

const links = {
    first: null,
    last: null,
    next: null,
    prev: null
};

export default {
    props: {
        params: {
            type: Object,
            required: false,
            default: () => {
                return {};
            }
        },
        options: {
            type: Object,
            required: false,
            default: () => {
                return {
                    meta,
                    links
                };
            }
        }
    },
    data: () => {
        return {
            meta,
            links
        };
    },
    computed: {
        more() {
            const { meta } = this;

            if (meta.current_page === meta.last_page) {
                return '找尋更多房源';
            }

            if (meta.current_page === meta.last_page && meta.total !== 0) {
                return '房源呈現完畢';
            }

            const properties = meta.total - meta.to;

            return `還有 ${properties} 筆房源`;
        }
    },
    methods: {
        first() {
            this.meta.current_page = 1;

            return this.request();
        },

        last() {
            this.meta.current_page = this.meta.last_page || 1;

            return this.request();
        },

        prev() {
            --this.meta.current_page;

            return this.request();
        },

        next() {
            ++this.meta.current_page;

            return this.request();
        },

        hasNext() {
            return true;
        },

        hasPrev() {
            return false;
        },

        async request() {
            const { data } = await this.$axios.get(
                SEARCH_URI.replace('{page}', this.meta.current_page),
                this.params || {}
            );

            await this.updateMeta(data);
            await this.$emit('request', data.data);
        },

        updateMeta({ data, meta, links }) {
            this.meta = meta;
            this.links = links;
        }
    }
};
</script>
