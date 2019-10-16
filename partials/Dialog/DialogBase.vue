<template lang="pug">
    v-dialog(v-model='model' scrollable fullscreen)
        v-card
            v-card-title
                span 是否刪除
            v-card-text.ma-0.pa-0
                v-container(fluid)
            v-card-actions.pa-4
                v-btn(block color='primary' dark large) delete
</template>
<script>
export default {
    model: {
        prop: 'active',
        event: 'update'
    },
    props: {
        active: {
            type: Boolean,
            default: false
        },
        item: {
            type: Object,
            default: () => {}
        },
        fullscreen: {
            type: Boolean,
            default: false
        },
        maxWidth: {
            type: [String, Number],
            default: ''
        }
    },
    data: () => ({}),
    computed: {
        model: {
            get() {
                return this.active;
            },
            set(value) {
                if (typeof value === 'boolean') {
                    this.$emit('update', value);
                }
            }
        }
    },
    methods: {
        // close() {
        //     this.model = false;
        //     this.$emit('close');
        // }
    }
};
</script>
