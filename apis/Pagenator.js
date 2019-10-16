import { SEARCH_URI } from '@/apis/uri';

export class Pagenator {
    constructor({ $axios, options: { meta, links, query } }) {
        this.$axios = $axios;

        this.items = [];

        this.meta = meta || {
            current_page: 1,
            from: 0,
            last_page: 1,
            path: null,
            per_page: 20,
            to: 0,
            total: 0
        };

        this.links = links || {
            first: null,
            last: null,
            next: null,
            prev: null
        };

        this.query = query || {};
    }

    first() {
        this.meta.current_page = 1;

        return this.request();
    }

    last() {
        this.meta.current_page = this.meta.last_page || 1;

        return this.request();
    }

    prev() {
        if (this.hasPrev()) {
            --this.meta.current_page;
        }

        return this.request();
    }

    next() {
        if (this.hasNext()) {
            ++this.meta.current_page;
        }

        return this.request();
    }

    callback(func) {
        this.cb = func;

        return this;
    }

    async request() {
        const { data } = await this.cb({
            $axios: this.$axios,
            meta: this.meta,
            links: this.links,
            query: this.query
        });
        await this.updateMeta(data);

        return this.items;
    }

    updateMeta({ data, meta, links }) {
        this.items = data;
        this.meta = meta;
        this.links = links;
    }

    hasNext() {
        return !!this.links.next;
    }

    hasPrev() {
        return !!this.links.prev;
    }
}
