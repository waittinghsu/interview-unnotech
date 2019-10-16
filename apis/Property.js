import { PROPERTY_URI, PROPERTIES_URI, PROPERTY_ALIVE_URI } from '@/apis/uri';
import { HTTP_STATUS_NO_CONTENT } from '@/plugins/defined';

/**
 * @todo adapter 因為經由 props 會無法 stringify, 所以先不回傳 adapters
 */
export default class Property {
    constructor($axios) {
        this.$axios = $axios;
    }

    async alive({ id }) {
        try {
            const { status } = await this.$axios.get(
                PROPERTY_ALIVE_URI.replace('{propertyId}', id)
            );

            return status === HTTP_STATUS_NO_CONTENT;
        } catch (error) {
            return false;
        }
    }

    async get({ id, includes }) {
        includes = includes || ['complete'];

        let params = {};

        if (includes.length > 0) {
            params = { includes: includes.join(',') };
        }

        const { data } = await this.$axios.get(
            PROPERTY_URI.replace('{propertyId}', id),
            { params }
        );

        return data;
    }

    async query({ indexes, includes }) {
        if (indexes.length === 0) {
            return [];
        }

        let params = {};

        params = {
            properties: indexes.join(',')
        };

        includes = includes || [];

        if (includes.length > 0) {
            params = { ...params, includes: includes.join(',') };
        }

        const { data } = await this.$axios.get(PROPERTIES_URI, { params });

        return data.data;
    }
}
