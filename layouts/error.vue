<template lang="pug">
    v-content
        template(v-if="error.statusCode === 404 && $route.name !== null")
            not-found-dynamic(:error="error")
        template(v-else-if="error.statusCode === 404")
            not-found-route(:error="error")
        template(v-else)
            un-catched(:error="error")
</template>

<script>
import NotFoundDynamic from '@/partials/Page/Errors/NotFoundDynamic';
import NotFoundRoute from '@/partials/Page/Errors/NotFoundRoute';
import UnCatched from '@/partials/Page/Errors/UnCatched';

export default {
    layout: 'bottom-navigation',
    components: { NotFoundDynamic, NotFoundRoute, UnCatched },
    head: {
        title: '錯誤貢面 - PigRent 找個窩'
    },
    props: {
        error: {
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({})
};
</script>
