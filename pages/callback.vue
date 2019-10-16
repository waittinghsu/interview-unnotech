<template lang="pug">
    v-content
        v-container
            v-row.fill-height(align-centent="center" justify="center")
                v-col.subtitle-1.text-center(cols="12")
                v-col(cols="6")
                    v-progress-linear(
                        color="primary lighten-1"
                        indeterminate
                        rounded
                        height="5")
</template>

<script>
export default {
    validate({ $auth }) {
        return $auth.strategy.name !== 'local';
    }
};
</script>
