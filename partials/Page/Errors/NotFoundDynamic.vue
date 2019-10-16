<template lang="pug">
    conponents(:is="name" :target="target" :error="error")
</template>
<script>
import NotFoundRoute from '@/partials/Page/Errors/NotFoundRoute';
export default {
    components: { NotFoundRoute },
    props: {
        error: {
            type: Object,
            required: true
        }
    },
    data: () => ({}),
    computed: {
        name() {
            // return `not-found-${this.target.name}`;
            return `not-found-Route`;
        },
        target() {
            const [origin, name, params, locale] = this.$route.name.match(
                /(.*)-(.*)___(.*)/s
            );

            return { name, locale, params: this.$route.params };
        }
    }
};
</script>
