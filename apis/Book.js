import {
    BOOKS_URI,
    BOOKS_GET_URI,
    BOOKS_ATTACH_URI,
    BOOKS_DETACH_URI
} from '@/apis/uri';

export default class Book {
    constructor($axios) {
        this.$axios = $axios;
    }
    // 單一資料搜尋
    async get({ id }) {
        const { data } = await this.$axios.get(
            BOOKS_GET_URI.replace('{id}', id)
        );

        return data;
    }
    // 多筆搜尋
    // @todo 搜尋條件
    async query({ includes }) {
        let params = {};

        params = {
            page: 1
        };

        includes = includes || [];

        if (includes.length > 0) {
            params = { ...params, includes: includes.join(',') };
        }

        const { data } = await this.$axios.get(BOOKS_URI, { params });

        return data['hydra:member'];
    }
    // 建立書籍
    async create({ params }) {
        // @todo 驗證欄位
        params = Object.assign(
            {
                reviews: []
            },
            params
        );
        const { data } = await this.$axios.post(BOOKS_URI, params);

        return data;
    }
    // 編輯書籍
    async attach({ bookId, params }) {
        /**
         * @todo validate bookId is string
         */
        params = Object.assign(
            {
                reviews: []
            },
            params
        );
        const { data } = await this.$axios.put(
            BOOKS_ATTACH_URI.replace('{id}', bookId),
            params
        );
        console.log('attach');

        return data;
    }
    // 刪除出擊
    async detach(bookId) {
        /**
         * @todo validate bookId is string
         * @jwt token??
         */

        const response = await this.$axios.delete(
            BOOKS_DETACH_URI.replace('{id}', bookId)
        );
        console.log(response);
        return 2;
        // return response;
    }
}
